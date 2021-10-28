import './App.css';
import { Counter } from './Applications/clickCounter/Counter';

function App() {
  return (
    <div className="App" data-test="component-app">
      <h1 className="app-head">React Testing!!</h1>
      <h2 className="app-child">Running Apps Below</h2>
      <Counter />
    </div>
  );
}

export default App;
