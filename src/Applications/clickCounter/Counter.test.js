import React from 'react';
import { Counter } from './Counter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Counter component.
 * @function setup
 * @returns {ShallowWrapper}
 */
// Dry Refactor
const setup = () => shallow(<Counter />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

//  TDD == Test Driven Development
test('renders without error', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
});

test('renders title header', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  const titleHeader = findByTestAttr(wrapper, 'title-header');
  expect(titleHeader.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  const count = findByTestAttr(wrapper, 'count').text();
  //  Expected: 1, Received: "0"
  // .text() return string
  expect(count).toBe('0');
  //  Expected: 0, Received: 1
  // expect(count.length).toBe('0');
});

test('clicking on button increments counter display', () => {
  const wrapper = setup();
  // Find the button
  const button = findByTestAttr(wrapper, 'increment-button');

  // click the button
  // .simulate(event[, ...args]) for button in Enzyme
  button.simulate('click');

  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('clicking on button decrements counter display', () => {
  const wrapper = setup();
  // Find the button
  const button = findByTestAttr(wrapper, 'decrement-button');

  // click the button
  // .simulate(event[, ...args]) for button in Enzyme
  button.simulate('click');

  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
});
