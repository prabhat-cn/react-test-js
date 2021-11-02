import React from 'react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './test/testUtils';
import './setupTests';
import App from './App';
import { getSecretWord as mockGetSecretWord } from './actions';

// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

/**
 * Setup function for App component
 * @returns {Wrapper}
 */

const setup = () => {
  // return shallow(<App />);

  // use mount, because useEffect not called on shallow
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

// Anonymus function

test('renders without error', () => {
  const wrapper = setup();
  // console.log('wrapper->', wrapper.debug());
  // set
  const appComponent = findByTestAttr(wrapper, 'component-app');
  // expect(appComponent.length).toBe(1);
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });
  test('getSecretWord on app mount', async () => {
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});

// expecting test
// test('renders non-rmpty component without crashing', () => {
//   const wrapper = shallow(<App />);
//   // expect(wrapper.exists()).toBe(false);
//   expect(wrapper.exists()).toBe(true);
// });
