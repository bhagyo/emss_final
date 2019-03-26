import React, { Component } from 'react';
import './DoctorHome.css';
import Title from './Title/Title'
import Controller from './Controller/Controller'
import SideBarMenu from './SideBarMenu/SideBarMenu'
import Backdrop from './Backdrop/Backdrop'

class DoctorHome extends Component {
  constructor(props){
    super(props)
    this.state={
      status: {
        Patient: false,
        Appiontment: false,
        Survey: false,
        SideBarMenuOpen: false
      }
    }
  }
  getAppiontment() {
    this.setState({
      status: {
        Patient: false,
        Appiontment: true,
        Survey: false
      }
    })
    console.log(this.props.doctor_name);
//    console.log("hlw");
  //  console.log(this.state.status);
  }
  getSurvey() {
    this.setState({
      status: {
        Patient: false,
        Appiontment: false,
        Survey: true
      }
    })
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }
  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
     }
    return (
      <div >
      <Title
      appiontment= { this.getAppiontment.bind(this) }
      survey = {this.getSurvey.bind(this)}
      drawerClickHandler={this.drawerToggleClickHandler.bind(this)}
      />
      <SideBarMenu show={this.state.sideDrawerOpen}/>
       {backdrop}
      <Controller value={this.state.status}
      doctor_name={this.props.doctor_name}
      doctor_id = {this.props.doctor_id}
      />
      </div>
    );
  }
}

export default DoctorHome;
