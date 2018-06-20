import React, { Component } from 'react';
import { Navbar, Nav, NavItem, } from 'react-bootstrap';


class Navigation extends Component{
    render(){
        return(
          <Navbar inverse collapseOnSelect fixedTop className="navbar">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#" >
                The Bride &amp; Groom
              </NavItem>
              <NavItem eventKey={2} href="#">
                Wedding
              </NavItem>
              <NavItem eventKey={3} href="#">
                Accomodations
              </NavItem>
              <NavItem eventKey={4} href="#">
                Registry
              </NavItem>
              <NavItem eventKey={5} href="#">
                Guest Book
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       )
    }
}

export default Navigation;