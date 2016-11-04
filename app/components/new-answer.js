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
        this.send('cancel');
        this.sendAction('saveAnswer', params);
      }
    },
    cancel() {
      this.set('error', false);
      this.set('answer', "");
      this.set('author', "");
      this.set('showNewAnswerForm', false);
    }
  }
});
