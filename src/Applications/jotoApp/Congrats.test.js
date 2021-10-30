import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../../test/testUtils';
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 * @returns {ShallowWrapper}  Congrats Tests and the .text() Meth
 */

const defaultProps = { success: false };

// 'success' don't passing

const setup = (props = {}) => {
  // props = {success: true}
  // return shallow(<Congrats success= {true} />);
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  // const wrapper = setup({ success: false });
  const wrapper = setup();
  // console.log(wrapper.debug());
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('rensers no test when `success` prop is false', () => {
  // const wrapper = setup({ success: false });
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('rensers no-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

// check prop types
//  Congrats.name -> name of component
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  // Congrats-> component name
  checkProps(Congrats, expectedProps);
  // const propError = checkPropTypes(
  //   Congrats.propTypes,
  //   expectedProps,
  //   'prop',
  //   Congrats.name
  // );
  // expect(propError).toBeUndefined();
  // got to testUtils
});
