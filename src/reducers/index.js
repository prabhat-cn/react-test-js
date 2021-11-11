import { combineReducers } from 'redux';
import guessedWordsReducer from './guessedWordsReducer';
import secretWordReducer from './secretWordReducer';
import successReducer from './successReducer';

export default combineReducers({
  success: successReducer,
  guessedWords: guessedWordsReducer,
  secretWord: secretWordReducer,
});
