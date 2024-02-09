import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <Button/>
      </header>
    </div>
  );
}

function Button(){
  const [count,setCount] = useState(0);
  return (
    <div>
        <p>count = {count}</p>
      <button onClick={() => setCount(count + 1) }>Increment</button>
      <button onClick={() => setCount(count - 1) }>Decrement</button>
    </div>
  )
}

export default App;
