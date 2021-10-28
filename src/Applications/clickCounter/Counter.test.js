import React from 'react';
import { Counter } from './Counter';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });

//  TDD == Test Driven Development
test('renders without error', () => {
  const wrapper = shallow(<Counter />);
  // console.log('Counter->', wrapper.debug());
  const counterComponent = wrapper.find("[data-test='component-counter']");
  expect(counterComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter display starts at 0', () => {});

test('clicking button increments counter display', () => {});
