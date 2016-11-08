import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  actions: {
    deleteAnswer(question, answer) {
      this.sendAction('deleteAnswer', question, answer);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    }
  }
});
