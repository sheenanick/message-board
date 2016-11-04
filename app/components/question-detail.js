import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    editQuestion(question, params) {
      this.sendAction('editQuestion', question, params);
    },
    deleteAnswer(question, answer) {
      this.sendAction('deleteAnswer', question, answer);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    },
    emptyInput(question) {
      this.sendAction('emptyInput', question);
    }
  }
});
