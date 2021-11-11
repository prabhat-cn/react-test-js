import moxios from 'moxios';
import { getSecretWord, currectGuess, actionTypes } from '.';

// describe('currectGuess', () => {
//   test('returns an action with type `CURRECT_GUESS', () => {
//     const action = currectGuess();
//     // initially provides empty object
//     // expect(action).toBe({});
//     // to remove this error(Received: serializes to the same string)
//     expect(action).toStrictEqual({ type: actionTypes.CURRECT_GUESS });
//   });
// });

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });
    // secret word operations
    // Update to test app in Redux/ Context section
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe('party');
    });
  });
});
