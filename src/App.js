import logo from './logo.svg';
import './App.css';

function App() {
  const getName = (name = 'Joseph', lastname = 'khan') => {
      console.log(`${name}` `${lastname}`);
  };

  getName('Christian','Chavez');
  getName();

  const numbers = [1,2,3,4,5];
  const numbers2 = [6,7,8,9];

  const numbers3= [...numbers, ...numbers2];

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
      </header>
    </div>
  );
}

export default App;
