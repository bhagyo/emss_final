import React, { Component } from 'react';
import './DoctorList.css'
import axios from 'axios'
//import DoctorListData from '.../Data/DoctorListData.json'



class DoctorList extends Component {

  constructor(props){
    super(props)
     this.state = {
    DoctorListData : []
    }
    console.log(props);
  }


   componentDidMount(){
    this.getDoctorListData()
  }

  getDoctorListData(){

    var doctor = this.props.doctortype;
    var loc = this.props.location;

   // var API = 'http://0.0.0.0:8000/api/doctorsearch/?speciality='+doctor+'&profile__address__district='+loc
    axios.get('http://0.0.0.0:8000/api/doctorsearch/?speciality='+doctor+'&profile__address__district='+loc)
    .then(res => {
      this.setState({DoctorListData: res.data})
      console.log(res.data)

    })
    .catch(err => {
      console.log(err)
   })


  }

  CreateAppointmentListHandler=(event)=>{
    console.log(event.target.id)
    var data = {
      id: event.target.id
    }
    this.props.ViewAppointment(data)
  }


  render() {
    return (
      <div className="DoctorList-box " >
        <div className="Scroll">
          {this.state.DoctorListData.map((doctor, index) => {
            return (
              <div className="row">
                <div className="Margin">
                  <img className="Picture" src= {doctor.profile.image} alt="image" />
                </div>
                <div className="Margin">

                  <h4>{doctor.profile.user.username}</h4>
                  <p>{doctor.speciality}</p>
                </div>
                <div className="Margin">

                  <button className="Margin mt-2 btn-outline-success"
                  onClick={this.CreateAppointmentListHandler}
                  id = {doctor.id}
                  >View Appointment
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

export default DoctorList;
