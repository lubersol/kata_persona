import logo from './logo.svg';
import './App.css';
import CompPersona from './CompPersona';


function App() {
  const titulo = "Mi componente persona";
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> {titulo}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <CompPersona />
      </header>
    </div>
  );
}

export default App;
