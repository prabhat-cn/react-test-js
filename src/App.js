import './App.css';
import { Counter } from './Applications/clickCounter/Counter';
import GuessedWords from './Applications/jotoApp/guessedWords/GuessedWords';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1 className="app-head">React Testing!!</h1>
      <h2 className="app-child">Running Apps Below</h2>
      <Counter />
      {/* <GuessedWords /> */}
    </div>
  );
}

export default App;
