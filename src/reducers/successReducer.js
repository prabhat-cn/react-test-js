/* eslint-disable import/no-anonymous-default-export */
/**
 * @function successReducer
 * @param {boolean} state - previous state.
 * @param {object} action - action to be reduced.
 * @returns {boolean} - new success state.
 */

import { actionTypes } from '../actions';

export default (state = false, action) => {
  //  get in test 'null'
  // return null;
  switch (action.type) {
    case actionTypes.CURRECT_GUESS:
      return true;
    default:
      return state;
  }
};
