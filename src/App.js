import React from 'react';
import './App.css';
import Persona from './components/Persona';


function App() {
  const titulo = "Mi componente persona"
  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <Persona nombre="Jane" apellidos="Doe" profesion="artist" />
        <Persona nombre="Bridget" apellidos="Jones" profesion="developer" />
        <Persona nombre="Sarah" apellidos="Connor" profesion="singer" />
      </header>
    </div>
  );
}

export default App;
