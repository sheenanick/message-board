import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    deleteQuestion(question) {
      var answers = question.get('answers').map(function(answer) {
       return answer.destroyRecord();
     });
     Ember.RSVP.all(answers).then(function() {
       return question.destroyRecord();
     });
     this.transitionTo('index');
    }
  }
});
