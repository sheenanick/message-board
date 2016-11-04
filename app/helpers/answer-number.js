import Ember from 'ember';

export function answerNumber(params) {
  if (params[0] === 1) {
    return params[0] + " answer";
  } else {
    return params[0] + " answers";
  }
}

export default Ember.Helper.helper(answerNumber);
