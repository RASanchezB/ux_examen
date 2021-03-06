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
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Bienes Raices Sanchez</NavbarBrand>
            <img alt="Logo" style={{ width: 100, height: 100 }} src={require("./logo.png")} />
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Home/">Home</NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink href="/">Edificios</NavLink>
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