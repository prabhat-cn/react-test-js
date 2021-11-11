import { storeFactory } from './test/testUtils';
import { guessWord } from './actions';
describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessFulGuess = 'train';
  describe('no guessed word', () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessFulGuess));
      const newState = store.getState();

      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWords: unsuccessFulGuess,
            letterMatchCount: 3, // matched letter from "train"
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          {
            guessedWords: secretWord,
            letterMatchCount: 5, // matched letter from "train"
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('asome guessed word', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
    const initialState = { guessedWords, secretWord };
    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    it('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessFulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessFulGuess,
            letterMatchCount: 5,
          },
        ],
      };
      expect(newState).toEqual(expectedState);
    });

    it('updates state correctly for successful guess', () => {});
  });
});
