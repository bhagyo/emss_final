import React, { Component } from 'react';
import './Title.css'
import './img-123.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Title extends Component{
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
      };
    }
    toggle() {
      this.setState({
        ...this.state,
        isOpen: !this.state.isOpen
      });
    }
    setAppiontment() {
      this.props.appiontment()
    }
    setSurvey() {
      this.props.survey()
    }
    sidebarHandler() {
      this.props.drawerClickHandler()
    }

  render(){

    let output = null;
    output = (
      <div>
        <Navbar color="dark" dark expand="md">
        <button class="btn btn-outline-success btn-lg ml-1 mr-2" onClick={event => this.sidebarHandler()}>
           <i class="fas fa-align-justify"></i>
        </button>
          <NavbarBrand href="/">EMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <button className="btn btn-outline-success ml-auto">Patient</button>
          <button
               className="btn btn-outline-success ml-auto"
               onClick={event=> this.setAppiontment()}
          >Appiontment Room
          </button>
          <button
               className="btn btn-outline-success ml-auto"
               onClick={event => this.setSurvey()}
          >Survey
          </button>
            <Nav className="ml-auto" navbar>
              <NavItem>

              </NavItem>
            </Nav>
            <img src="./img-123.png"  className="img-responsive avatar"/>
          </Collapse>
        </Navbar>
      </div>
)
   return (
     <div>
        {output}
     </div>

   )

  }
}
export default Title
