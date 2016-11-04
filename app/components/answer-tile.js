import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(question, answer) {
      this.sendAction('deleteAnswer', question, answer);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
