import React from 'react';
import './App.css';
import CompPersona from './CompPersona';

const ListaPersonas = (props) => {
  return (<div>
    <ul>
      <li><label>Nombre: {props.nombre}</label></li>
      <li><label>Apellidos: {props.apellidos}</label></li>
      <li><label>Profesion: {props.profesion}</label></li>
    </ul>
  </div>)
}
function App() {
  const Titulo = <h1>Mi componente persona</h1>
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <ListaPersonas nombre="Lucía" apellidos="Bermejo" profesion="programadora" />
        <CompPersona />
      </header>
    </div>
  );
}

export default App;
