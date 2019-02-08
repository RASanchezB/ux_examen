import React, { Component } from 'react';
import logo from './Yo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Yo" />
          <h3>Ricardo Sanchez</h3>
          <h6>Numero de cuenta: 11641051</h6>
          <h6>Profesion: Estudiante de ingenieria en sistemas computacionales</h6>
          <h6>Instituto: UNITEC</h6>
          <h6>Nacimiento: 3 de Agosto de 1998</h6>
          <h6>Telefono: 89725037</h6>
          <h6>Correo: Rasanchez@unitec.edu</h6>
          <h4>Informacion general</h4>
          <p>
          Soy un estudiante de Unitec con la esperanza de pasar sus clases con un buen promedio y lograr estudiar su maerstria en el extrangero. Conocido como leyenda entre ciertos miembors de las carreras de ingenieria por su gran suerte al final de cada periodo. Sus proesas fueron llamadas "La Sanchez" por su gran capacidad al reproducir estos milagros. Muchos imitan sus acciones al lograr recrear el milagro de "La Sanchez" 
          </p>
          <h4>Perfil y Aspiraciones</h4>
          <p>Me gusta trabajar, soy una persona puntual, responsable, amigable y respetuosa. Tengo de objetivo terminar mis estudios universitarios y trabajar para obtener una vida satisfactoria y honrada.</p>
          <a
            className="App-link"
            href="https://www.facebook.com/ricardo.sanchez.90260403?ref=bookmarks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi Facebook
          </a>
        </header>
      </div>
    );
  }
}

export default App;
