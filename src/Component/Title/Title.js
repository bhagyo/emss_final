import React, { Component } from 'react';
import './Title.css'
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
        name : props.name,
        flag : props.flag,
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        ...this.state,
        isOpen: !this.state.isOpen
      });
    }
    sidebarHandler() {
      this.props.drawerClickHandler()
    }
    loginHandler() {
      this.props.loginClickHandler()
      
    }
    doctorLoginHandler(){
      console.log('bal-sal-2');
      this.props.doctorLoginClickHandler()
    }

  render(){

    let output = null;

    if(this.state.flag){
      console.log("..kaz hoise");
      output = (
      <div>
        <Navbar color="dark" dark expand="md">
        <button class="btn btn-outline-success btn-lg ml-1 mr-2" onClick={event => this.sidebarHandler()}>
           <i class="fas fa-align-justify"></i>
        </button>
          <NavbarBrand href="/">EMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <span className="btn btn-outline-success mr-4"  >{this.state.name}</span>
              </NavItem>
              <NavItem>
                <button className="btn btn-outline-success">Logout</button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
      )
    }
    else {

      output = (
      <div>
        <Navbar color="dark" dark expand="md">
        <button class="btn btn-outline-success btn-lg ml-1 mr-2" onClick={event => this.sidebarHandler()}>
           <i class="fas fa-align-justify"></i>
        </button>
          <NavbarBrand href="/">EMS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <button className="btn btn-outline-success mr-1" onClick={event =>this.loginHandler()}>Patient Login/Register</button>
              </NavItem>
              <NavItem>
                <button className="btn btn-outline-success" onClick={event =>this.doctorLoginHandler()}>Doctor Login/Register</button>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
        /*
               <span className="d-flex Title">
                    <h1 className="display-4 ml-auto py-5"> {this.state.title} </h1>
                  <div className="ml-auto ">
                         <button className="btn btn-outline-success mr-1">Patient Login/Register</button>
                         <button className="btn btn-outline-success">Doctor Login/Register</button>
                  </div>

                </span>
                */
)

    }


    

    
    
   return (
     <div>
        {output}
     </div>

   )

  }
}
export default Title
