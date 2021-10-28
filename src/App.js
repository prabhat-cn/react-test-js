import logo from './logo.svg';
import './App.css';
import { Counter } from './Applications/clickCounter/Counter';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1>Learn React Testing!!</h1>
      <Counter />
    </div>
  );
}

export default App;
