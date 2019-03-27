import React, { Component } from 'react';
import './AppointmentView.css'
import axios from 'axios'
//import DoctorListData from '.../Data/DoctorListData.json'



class AppointmentView extends Component {

  constructor(props){
    super(props)
     this.state = {
    AppointmentListData : [],
    AppointmentData: null
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
  getAppointmentHandler=(event)=>{
    console.log(event.target.value)
    var appointmentID = event.target.value;
    if(this.props.user_id == null){
      alert("You are not logged in.");
    }
    else{
      axios.get('http://127.0.0.1:8000/api/appointmentget/'+appointmentID)
    .then(res => {
      this.setState({AppointmentData: res.data})
      console.log(this.state.AppointmentData)

      ///////////////// try new ////////////////
      var startDTime = this.state.AppointmentData.start_time;
      var endDtime = this.state.AppointmentData.end_time;
      var startTime = new Date(startDTime);
      var endTime = new Date(endDtime);
      var diff = endTime.getTime() - startTime.getTime();
      var msec = diff;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;
      var duration = hh * 60 + mm  + ss * 0.016;
      console.log("duration:  "+duration)
      var time = Math.floor(duration/this.state.AppointmentData.patient_amount);
      console.log(this.state.AppointmentData.patients.length)
      var present = this.state.AppointmentData.patients.length;
      var limit = this.state.AppointmentData.patient_amount;
      if(present === limit){
        alert("Sorry Appointment Room is Full.");
      }
      else{
        ///////// get app /////////////

        const postData = {
          doctor: this.state.AppointmentData.doctor,
          patients_id: [this.props.user_id],
          location: this.state.AppointmentData.location,
          id: appointmentID,
          start_time: this.state.AppointmentData.start_time,
          end_time: this.state.AppointmentData.end_time,
          patient_amount: this.state.AppointmentData.patient_amount
        }

       axios.put('http://127.0.0.1:8000/api/appointmentget/'+appointmentID,postData)
        .then(res => {

         console.log(res)
         time = time * (res.data.patients.length-1)
         alert("Your appointment time is "+time+" minutes along with start time "+ "and your serial "+res.data.patients.length);

        })
        .catch(err => {
         console.log(err)
        })


        ////// end ///////////////////

      }

      ///////////////// end ///////////////////

    })
    .catch(err => {
      console.log(err)
   })
    }
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
                  value = {appointment.id}
                  onClick = {this.getAppointmentHandler}
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
