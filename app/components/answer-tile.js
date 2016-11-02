import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(question, answer) {
      this.sendAction('deleteAnswer', question, answer);
    }
  }
});
