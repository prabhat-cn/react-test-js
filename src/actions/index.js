import axios from 'axios';
import { getLetterMatchCount } from '../helpers';
// redux ops ACTION TYPES
export const actionTypes = {
  CURRECT_GUESS: 'CURRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};
// provides empty object
export const currectGuess = () => {
  // initial
  // return {};
  return { type: actionTypes.CURRECT_GUESS };
};
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    // from helper
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });
    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CURRECT_GUESS,
      });
    }
  };
};

export const getSecretWord = () => {
  // Write actual action in Redux / Context sections
  return axios.get(`http://localhost:3030`).then((response) => response.data);
};
