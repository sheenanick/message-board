import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  add(question) {
    this.get('questions').pushObject(question);
    console.log(this.get('questions')[0]);
  }
});
