import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';
import { checkProps, findByTestAttr } from '../../../test/testUtils';
import '../../../setupTests';

const setup = (success = false, secretWord = 'party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', () => {
  describe('Success is true', () => {
    let wrapper;
    beforeEach(() => {
      // repeted functions here
      wrapper = setup(true);
    });
    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('Input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    });

    test('Submit button does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe('Success is false', () => {
    let wrapper;
    beforeEach(() => {
      // repeted functions here
      wrapper = setup(false);
    });
    test('Input renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    });

    test('Input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    });

    test('Submit button shows', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test('does not throw warning with expected props', () => {
  // checkProps(component name, { props });
  checkProps(Input, { secretWord: 'party' });
});

describe('state control input field', () => {
  // scoped here
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  let originalUseState;

  beforeEach(() => {
    // repeated code here
    // for useState
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    // by mock "React.useState"
    // React.useState = () => ['', mockSetCurrentGuess];
    // same
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test('state updates with value of input box upon change', () => {
    // const wrapper = setup();
    const inputBox = findByTestAttr(wrapper, 'input-box');
    // change the event in input box guess train
    const mockEvent = { target: { value: 'train' } };
    // test to change the value of onChange event of input field
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('field is cleared upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    // after "evt.preventDefault();"
    submitButton.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});
