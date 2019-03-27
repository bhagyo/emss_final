import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title'
import SearchBox from './SearchBox/SearchBox'
import Head from './Head/Head'
import Menu from './Menu/Menu'
import SideBarMenu from './SideBarMenu/SideBarMenu'
import Backdrop from './Backdrop/Backdrop'
import Login from './Login/Login'
import DoctorLogin from './DoctorLogin/DoctorLogin'
import Register from './Register/Register'
import DoctorRegister from './DoctorRegister/DoctorRegister'
import DoctorHome from './DoctorHome/DoctorHome'
import DoctorList from './DoctorList/DoctorList'
import AppointmentView from './AppointmentView/AppointmentView'


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      Home: true,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: null,
      User_id: null,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    }
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }
  loginPageHandler = () => {
    this.setState({
      Home: false,
      DoctorHome:false,
      Login: true,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: null,
      User_id: null,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })

  }
  doctorLoginPageHandler = () => {
     this.setState({
      Home: false,
      DoctorHome:false,
      Login: false,
      Doctorlogin:true,
      Register: false,
      Doctorregister:false,
      Username: null,
      User_id: null,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })

  }
  registerPageHandler = ()=> {
    this.setState({
      Home: false,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: true,
      Doctorregister:false,
      Username: null,
      User_id: null,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })
    console.log("bal-sal");
  }
  doctorRegisterPageHandler = ()=>{

    this.setState({
      Home: false,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:true,
      Username: null,
      User_id: null,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })

  }

  handleLogin = (value)=>{
    console.log(value);
    this.setState({
      Home: true,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: value.name,
      User_id: value.user_id,
      Loginflag: true,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })
  }

  handleDoctorLogin = (value)=>{
    this.setState({
      Home: false,
      DoctorHome:true,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: value.name,
      User_id: value.user_id,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: null,
      Doctordata: null,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })
  }
  searchDataHandler = (data)=>{
    this.setState({
      Home: false,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: this.state.Username,
      User_id: this.state.User_id,
      Loginflag: false,
      Doctorlist: true,
      Locationdata: data.location,
      Doctordata: data.doctor,
      ViewAppointment: null,
      SideBarMenuOpen: false
    })
    console.log(data);
  }
  ViewAppointmentPageHandler = (data) =>{
     this.setState({
      Home: false,
      DoctorHome:false,
      Login: false,
      Doctorlogin:false,
      Register: false,
      Doctorregister:false,
      Username: this.state.Username,
      User_id: this.state.User_id,
      Loginflag: false,
      Doctorlist: false,
      Locationdata: this.state.Locationdata,
      Doctordata: this.state.Doctordata,
      ViewAppointment: data.id,
      SideBarMenuOpen: false
    })
    console.log(data);
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let backdrop;
    let output = null;


    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
     }


     if(this.state.Home && this.state.Loginflag){

      output = (
        <div>
        <Title
        drawerClickHandler={this.drawerToggleClickHandler.bind(this)}
        loginClickHandler={this.loginPageHandler.bind(this)}
        name = {this.state.Username}
        flag = {this.state.Loginflag}
        />
        <SideBarMenu show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Head />
        <SearchBox
        searchData={this.searchDataHandler.bind(this)}
        />
       </div>
       )

     }
     else if (this.state.Home){
      output = (
        <div>
        <Title
        drawerClickHandler={this.drawerToggleClickHandler.bind(this)}
        loginClickHandler={this.loginPageHandler.bind(this)}
        doctorLoginClickHandler={this.doctorLoginPageHandler.bind(this)}
        />
        <SideBarMenu show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Head />
        <SearchBox
        searchData={this.searchDataHandler.bind(this)}
        />
       </div>
       )
     }
     else if (this.state.Login) {
       output = (
         <Login
         registerClickHandler={this.registerPageHandler.bind(this)}
         afterLoginHandler={this.handleLogin.bind(this)}
         />
       )
     }
     else if (this.state.Doctorlogin) {
       output = (
         <DoctorLogin
         doctorRegisterClickHandler={this.doctorRegisterPageHandler.bind(this)}
         afterDoctorLoginHandler={this.handleDoctorLogin.bind(this)}
         />
       )
     }
     else if(this.state.Register){
       output = (
         <Register/>
       )
     }
     else if(this.state.Doctorregister){
      output = (
      <DoctorRegister/>
      )
     }
     else if(this.state.DoctorHome){
      output = (
      <DoctorHome
      doctor_name={this.state.Username}
      doctor_id={this.state.User_id}

       />

      )
     }
     else if(this.state.Doctorlist){
      output = (
      <DoctorList
      doctortype = {this.state.Doctordata}
      location = {this.state.Locationdata}
      ViewAppointment ={this.ViewAppointmentPageHandler.bind(this)}
      />
      )
     }
     else if(this.state.ViewAppointment){
       output = (
       <AppointmentView
       doctorID = {this.state.ViewAppointment}
       user = {this.state.Username}
       user_id = {this.state.User_id}
        />
       )
     }

    return (
      <div className="app">
      {output}
      </div>
    );
  }
}

export default App;
