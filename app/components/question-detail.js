import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },
    editQuestion(question, params) {
      this.sendAction('editQuestion', question, params);
    }
  }
});
