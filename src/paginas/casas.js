//dependencias
import React, { Component } from 'react';
import './Casas.css';
//imports
import {casas} from './casas.json';
import Navigation from './components/Navigation.js';

//import para botones
import { Button } from 'reactstrap';
//imports para el nav bar
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class casas extends Component {
  /*Para bienes raices*/
  constructor(){
    super();
      this.state = {
        casas
      } 
      
  }
  


  render() {

    const casas = this.state.casas.map((casas, i) => {
      return(
        <div className = "col-md-4">
          <div className = "card mt-4">
            <div className = "card-header">
              <h4>{casas.Nombre}</h4>
            </div>
            <div className = "card-body">
              <img src= {casas.Imagen}  alt = "imagen"></img>
              <p>Ubicacion: {casas.Ubicacion}</p>
              <p>Precio: {casas.Precio}</p>
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

        <div className = "conteiner">
          <div className = "row mt-4">
            {casas}
          </div>
        </div>
      </div>
    );
    
  }
  
}


export default casas;
