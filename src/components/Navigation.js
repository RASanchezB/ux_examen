import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
//imports para moverse 
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";
  import Casas from '../Casas';

const NewRoute = () => {
  return(
    <div>
        <Casas></Casas>
    </div>
  )
}


class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/casas" component = {NewRoute}/>
        </BrowserRouter>
      
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Bienes Raices Sanchez</NavbarBrand>
            <img alt="Logo" style={{ height: "fill", width: 100, height: 100 }} src={require("./logo.png")} />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="../Casas">Casas</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/RASanchezB">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;