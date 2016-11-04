import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
