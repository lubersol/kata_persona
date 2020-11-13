import React from 'react';

// eslint-disable-next-line no-unused-vars
class CompPersona extends React.Component {
    constructor() {
        super();
        this.state = {
            nombre: "Lucía",
            apellidos: "Bermejo",
            profesion: "Programadora"
        };
    }
    
    //Metodo que renderiza el codigo de la plantilla JSX
    render() {
        return (
            <div>
                <span>Nombre: {this.state.nombre}</span>
                <span>Apellidos: {this.state.apellidos} </span>
                <span>Profesion: {this.state.profesion} </span>
            </div>
        );
    }
}
export default CompPersona;