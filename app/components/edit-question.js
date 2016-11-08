import Ember from 'ember';

export default Ember.Component.extend({
  showEditQuestionForm: false,
  emptyInput: false,
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
      if (params.content !== undefined && params.content.length > 0 && params.content.replace(/\s/g, '').length === 0 || params.author !== undefined && params.author.length > 0 && params.author.replace(/\s/g, '').length === 0 || params.notes !== undefined && params.notes.length > 0 && params.notes.replace(/\s/g, '').length === 0) {
        this.set('emptyInput', true);
      } else {
        this.set('emptyInput', false);
        this.set('showEditQuestionForm', false);
        this.sendAction('editQuestion', question, params);
      }
    },
    cancel() {
      this.set('showEditQuestionForm', false);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
  }
});
