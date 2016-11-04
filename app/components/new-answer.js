import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswerForm: false,
  error: false,
  actions: {
    showNewAnswerForm() {
      this.set('showNewAnswerForm', true);
    },
    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question'),
        votes: 0
      };
      if(params.answer === undefined || params.author === undefined || params.answer === "" || params.author === "") {
        this.set('error', true);
        this.sendAction('emptyInput', params.question);
      } else {
        this.set('showNewAnswerForm', false);
        this.set('error', false);
        this.sendAction('saveAnswer', params);
      }
    },
    cancel() {
      this.set('showNewAnswerForm', false);
    }
  }
});
