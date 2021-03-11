import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {useState} from 'react';


function App() {
  const [message, setMessage] = useState(
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    )
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button setMessage={setMessage}/>
        {message}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
  );
}

export default App;
