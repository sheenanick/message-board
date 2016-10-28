import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswerForm: false,
  actions: {
    showNewAnswerForm() {
      this.set('showNewAnswerForm', true);
    },
    saveAnswer() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.set('showNewAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
