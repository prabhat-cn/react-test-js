import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { checkProps, findByTestAttr } from '../../../test/testUtils';
import '../../../setupTests';

const defaultProps = {
  // array data
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test('does not throw warning with expected props', () => {
  // to error less code using check props
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});

describe('if there are words guessed', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "gussed words" section', () => {
    const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
    expect(guessedWordsNode.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toBe(guessedWords.length);
  });
});

// describe('no words guessed', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = setup({
//       secretWord: 'party',
//       success: false,
//       guessedWords: [],
//     });
//   });
//   test('creates guessedWords table with one row', () => {
//     const guessedWordRows = findByTestAttr(wrapper, 'guessed-word');
//     expect(guessedWordRows).toHaveLength(1);
//   });
// });

// describe('some word being guessed', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = setup({
//       secretWord: 'party',
//       success: false,
//       guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
//     });
//   });

//   test('adds row to the guessedWords table', () => {
//     const guessedWordNods = findByTestAttr(wrapper, 'guessed-word');
//     expect(guessedWordNods).toHaveLength(2);
//   });
// });

// describe('guessed the secret word', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = setup({
//       secretWord: 'party',
//       success: false,
//       guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }],
//     });

//   });});
