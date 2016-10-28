import Ember from 'ember';

export default Ember.Component.extend({
  showNewQuestionForm: false,
  actions: {
    showNewQuestionForm() {
      this.set('showNewQuestionForm', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('showNewQuestionForm', false);
      this.sendAction('saveQuestion', params);
    },
    cancel() {
      this.set('showNewQuestionForm', false);
    }
  }
});
