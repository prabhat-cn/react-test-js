import { combineReducers } from 'redux';
import guessedWordsReducer from './guessedWordsReducer';
import successReducer from './successReducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
});
