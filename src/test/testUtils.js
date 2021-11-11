/**
 * Create a testing store with imported reducers, middleware, and initial state.
 *  globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */

import checkPropTypes from 'check-prop-types';

// for redux ops start global
import { createStore } from 'redux';

import rootReducer from '../reducers';

export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};

// store ops global end

// test attribute read
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

// for checking generic all props types of 'checkPropTypes'
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
