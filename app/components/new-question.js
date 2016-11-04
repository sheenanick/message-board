import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params = {
        content: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      if (params.content === undefined || params.author === undefined || params.notes === undefined) {
        this.sendAction('emptyInput');
      } else {
        this.sendAction('saveQuestion', params);
      }
    }
  }
});
