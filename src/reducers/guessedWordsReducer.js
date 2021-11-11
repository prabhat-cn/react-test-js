/* eslint-disable import/no-anonymous-default-export */
/**
 * @function successReducer
 * @param {boolean} state - previous state.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */

import { actionTypes } from '../actions';

export default (state = [], action) => {
  //  get in test 'null'
  // return null;
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
