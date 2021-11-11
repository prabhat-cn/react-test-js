import { actionTypes } from '../actions';
import successReducer from './successReducer';

it('when previous state is undefined, return false', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

it('return previous state when unknown action type', () => {
  const newState = successReducer(false, { type: 'unknown' });
  expect(newState).toBe(false);
});

it('return `true` for action type CURRECT_GUESS', () => {
  const newState = successReducer(false, { type: actionTypes.CURRECT_GUESS });
  expect(newState).toBe(true);
});
