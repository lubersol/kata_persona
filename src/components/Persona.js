/* eslint-disable no-useless-constructor */
import React from 'react';


class Persona extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div>
            <ul>
                <li>Nombre: {this.props.nombre}</li>
                <li>Apellidos: {this.props.apellidos}</li>
                <li>Profesion: {this.props.profesion}</li>
            </ul>
        </div>)
    }

}

export default Persona;