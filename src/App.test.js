import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Anonymus function

test('renders without crashing', () => {
  const wrapper = shallow(<App />);
  // console.log('wrapper->', wrapper.debug());
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});

// expecting test
test('renders non-rmpty component without crashing', () => {
  const wrapper = shallow(<App />);
  // expect(wrapper.exists()).toBe(false);
  expect(wrapper.exists()).toBe(true);
});
