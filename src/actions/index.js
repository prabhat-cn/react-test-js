import axios from 'axios';
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
export const guessWord = () => {
  return function (dispatch, getState) {};
};

export const getSecretWord = () => {
  // Write actual action in Redux / Context sections
  return axios.get(`http://localhost:3030`).then((response) => response.data);
};
