import React, { Component } from 'react';
import './AppointmentView.css'
import axios from 'axios'
//import DoctorListData from '.../Data/DoctorListData.json'



class AppointmentView extends Component {

  constructor(props){
    super(props)
     this.state = {
    AppointmentListData : [],
    time: null
    }
    console.log(props);
  }


   componentDidMount(){
    this.getAppointmentListData()
  }

  getAppointmentListData(){
    /// kaz hobe...////////////////////////////////////////////

    var doctor = this.props.doctorID;


   // var API = 'http://0.0.0.0:8000/api/doctorsearch/?speciality='+doctor+'&profile__address__district='+loc
    axios.get('http://0.0.0.0:8000/api/appointmentlist/?doctor__id='+doctor)
    .then(res => {
      this.setState({AppointmentListData: res.data})
      console.log(this.state.AppointmentListData)

    })
    .catch(err => {
      console.log(err)
   })


  }




  render() {
    return (
      <div className="AppointmentList-box " >
        <div className="Scroll">
          {this.state.AppointmentListData.map((appointment, index) => {
             var time = null;
            return (
              <div className="row mt-4">
                <div className="Margin">
                  <h6> Start Time: {Date(appointment.start_time)} </h6>
                </div>
                <div className="Margin">

                  <h6> End Time: {Date(appointment.end_time)} </h6>
                </div>
                <div className="Margin">

                  <h6> Address: {appointment.location} </h6>
                </div>
                <div className="Margin">

                  <button className="Margin mt-2 btn-outline-success"


                  >Get Appointment
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default AppointmentView;
