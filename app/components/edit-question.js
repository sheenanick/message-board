import Ember from 'ember';

export default Ember.Component.extend({
  showEditQuestionForm: false,
  actions: {
    showEditQuestionForm() {
      this.set('showEditQuestionForm', true);
    },
    editQuestion(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('showEditQuestionForm', false);
      this.sendAction('editQuestion', question, params);
    },
    cancel() {
      this.set('showEditQuestionForm', false);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  }
});
