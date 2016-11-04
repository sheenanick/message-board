import Ember from 'ember';

export default Ember.Component.extend({
  myFavorites: Ember.inject.service(),
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    addToFavorites(question) {
      this.get('myFavorites').add(question);
    }
  }
});
