//dependencias
import React, { Component } from 'react';
import './App.css';
//imports de otras cosas para render
import {edificios} from './edificios.json';
import Navigation from './components/Navigation.js';
import CitaForm from './components/CitaForm.js';
import Citas from './citas.json';
//import para botones
import { Button } from 'reactstrap';
//imports para el nav bar
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Home from './components/Home';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';

const NewRoute = () =>{
  return(
    <div>
      <Home></Home>
    </div>
  );
}

class App extends Component {
  /*Para bienes raices*/
  constructor(){
    super();
    this.state = {
      edificios
    } 
      this.hanldeAddCitas = this.hanldeAddCitas.bind(this);
      //this.myFunction = this.myFunction.bind(this)
  }
  hanldeAddCitas(cita){
    this.setState({
      citas:[...Citas.citas, cita]
    })
  }
  myFunction(){
    window.scrollTo(0,document.body.scrollHeight);
    alert('Organizar cita aqui')
  }

  render() {
    const edificios = this.state.edificios.map((edificios, i) => {
      return(
        <div className = "col-md-4" key={i}>
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
              <button
                className="btn btn-danger" 
                onClick = {this.myFunction.bind(this)}>Organizar cita</button>
            </div>
          </div>
        </div>
        
      );
    })
    /*min 45:19 del tutorial */
    return (
      <div className = "App">
        <Navigation></Navigation>
        <BrowserRouter>
          <Route path="/Home" component={NewRoute}/>
        </BrowserRouter>

        <h1>Proyectos Grandes</h1>
        <h3>Grandes edificios para grandes empresarios</h3>
        <div className = "conteiner">
          <div className = "row mt-4">
            {edificios}
          </div>
        </div>
        <CitaForm onAddCita={this.hanldeAddCitas}></CitaForm>
        
      </div>
    );
  }
}
export default App;
