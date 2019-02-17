//dependencias
import React, { Component } from 'react';
import './App.css';
//imports
import {edificios} from './edificios.json';
import Navigation from './components/Navigation.js';

//import para botones
import { Button } from 'reactstrap';
//imports para el nav bar
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  /*Para bienes raices*/
  constructor(){
    super();
      this.state = {
        edificios
      } 
      
  }
  


  render() {

    const edificios = this.state.edificios.map((edificios, i) => {
      return(
        <div className = "col-md-4">
          <div className = "card mt-4">
            <div className = "card-header">
              <h4>{edificios.Nombre}</h4>
            </div>
            <div className = "card-body">
              <img src= {edificios.Imagen}  alt = "imagen"></img>
              <p>Ubicacion: {edificios.Ubicacion}</p>
              <p>Precio: {edificios.Precio}</p>
            </div>
            <div className = "card-footer">
              <button onclick = "myFunction()">Organizar cita</button>
            </div>
          </div>
        </div>
      );
    })
    /*min 45:19 del tutorial */
    return (
      <div className = "App">
        <Navigation></Navigation>
        <h1>Home</h1>
        <h3>Grandes edificios para grandes empresarios</h3>
        <div className = "conteiner">
          <div className = "row mt-4">
            {edificios}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
