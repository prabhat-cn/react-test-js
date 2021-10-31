import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import './setupTests';
import App from './App';

/**
 * Setup function for App component
 * @returns {Wrapper}
 */

const setup = () => {
  return shallow(<App />);
};

// Anonymus function

test('renders without error', () => {
  const wrapper = setup();
  // console.log('wrapper->', wrapper.debug());
  const appComponent = findByTestAttr(wrapper, 'component-app');
  // expect(appComponent.length).toBe(1);
  expect(appComponent).toHaveLength(1);
});

// expecting test
// test('renders non-rmpty component without crashing', () => {
//   const wrapper = shallow(<App />);
//   // expect(wrapper.exists()).toBe(false);
//   expect(wrapper.exists()).toBe(true);
// });
