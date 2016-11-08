import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
    },
    deleteAnswer(question, answer) {
      answer.destroyRecord();
      this.transitionTo('question', question);
    },
    deleteQuestion(question) {
      var answers = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answers).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    upVote(answer) {
      var votes = answer.get('votes');
      votes += 1;
      answer.set('votes', votes);
      answer.save();
      this.transitionTo('question', answer.get('question'));
    },
    downVote(answer) {
      var votes = answer.get('votes');
      votes -= 1;
      answer.set('votes', votes);
      answer.save();
      this.transitionTo('question', answer.get('question'));
    }
  }
});
