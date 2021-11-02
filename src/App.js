import './App.css';
import { Counter } from './Applications/clickCounter/Counter';
import Congrats from './Applications/jotoApp/congrats/Congrats';
import GuessedWords from './Applications/jotoApp/guessedWords/GuessedWords';
import Input from './Applications/jotoApp/inputComponent/Input';
import { getSecretWord } from './actions';
import { useEffect } from 'react';

function App() {
  // get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div className="App" data-test="component-app">
      <h1 className="app-head">React Testing!!</h1>
      <h2 className="app-child">Running Apps Below</h2>
      <Counter />
      <br />
      <h1>Jotto Guess Game</h1>
      {/* pass props value depends on test */}
      <Congrats success={false} />
      <Input success={success} secretWord={secretWord} />
      {/* <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      /> */}
      <GuessedWords guessedWords={[]} />
    </div>
  );
}

export default App;
