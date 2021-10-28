import React from 'react';
import { Counter } from './Counter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Dry Refactor
/**
 * Factory function to create a ShallowWrapper for the Counter component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => {
  shallow(<Counter />);
};

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

//  TDD == Test Driven Development
test('renders without error', () => {
  const wrapper = shallow(<Counter />);
  // console.log('Counter->', wrapper.debug());
  // const counterComponent = wrapper.find("[data-test='component-counter']");
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
});

test('renders title header', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  // const titleHeader = wrapper.find("[data-test='title-header']");
  const titleHeader = findByTestAttr(wrapper, 'title-header');
  expect(titleHeader.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  // const incrementButton = wrapper.find("[data-test='increment-button']");
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  // const counterDisplay = wrapper.find("[data-test='counter-display']");
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter display starts at 0', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  // const counterComponent = wrapper.find("[data-test='component-counter']");
  const counterComponent = findByTestAttr(wrapper, 'component-counter');
  expect(counterComponent.length).toBe(1);
});

test('clicking button increments counter display', () => {
  const wrapper = setup();
  // console.log('Counter->', wrapper.debug());
  // const counterComponent = wrapper.find("[data-test='component-counter']");
  // const counterComponent = findByTestAttr(wrapper, 'component-counter');
  // expect(counterComponent.length).toBe(1);
});
