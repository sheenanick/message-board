import Ember from 'ember';

export default Ember.Component.extend({
  myFavorites: Ember.inject.service(),
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    toggleFavorites(question) {
      var myFavorites = this.get('myFavorites');
      if (myFavorites.questions.includes(question)) {
        myFavorites.remove(question);
        question.set('favorite', false);
      } else {
        myFavorites.add(question);
        question.set('favorite', true);
      }
    }
  }
});
