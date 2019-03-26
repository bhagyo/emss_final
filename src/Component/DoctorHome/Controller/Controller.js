import React, { Component } from 'react';
import './Controller.css';
import axios from 'axios'

const APPIONT_URL = 'http://0.0.0.0:8000/api/appointmentcreate'

const initiaState = {

    patients: [],
    location:"",
    address: "",
    date: "",
    start_time: "",
    end_time: "",
    patient_amount: "",
    doctor: ""
}

class Controller extends Component {

  constructor(props) {
    super(props)

    this.myAppiontmentRoom = React.createRef()

    this.state = {
    ...initiaState
  }

  }

  changeHandler = (event) => {

      this.setState({
        [event.target.name]: event.target.value
      })

      console.log(event.target.value);


  }

  submitHandler = (event) =>{
    const {
    patients,
    address,
    location,
    date,
    start_time,
    end_time,
    patient_amount,
    doctor

        } = this.state;

    const postData = {

    patients: patients,
    address: address,
    location:location,
    start_time: date+"T"+start_time,
    end_time: date+"T"+end_time,
    patient_amount: patient_amount,
    doctor: this.props.doctor_id,

    };
    event.preventDefault()
    console.log(this.state)
    this.myAppiontmentRoom.current.reset()
    axios.post(APPIONT_URL,postData)
    .then(res =>{
      console.log(res)

    })
    .catch(error =>{
      console.log("ERROR::: "+error)
    })


    this.setState({
      ...initiaState
    });


  }

  render() {
    console.log(this.props.value.Appiontment);
    let output=null;

    if(this.props.value.Appiontment) {
      output=(
        <div className="Appiontment-box">
        <form ref = {this.myAppiontmentRoom}  onSubmit={this.submitHandler} >

            <h5 className="ml-3 mt-3">Create Appiontment Room:   </h5>
            <div className="space mt-3">
                <h8 className="ml-5">Date: </h8>
                <input type="Date" size="4"
                name = "date"
                id = "date"
                value = {this.state.date}
                onChange = {this.changeHandler}
                />
            </div>
            <div className="mt-3">
                <h8 className="ml-5">Start: </h8>
                <input type="time" size="4"
                name = "start_time"
                id = "start_time"
                value = {this.state.start_time}
                onChange = {this.changeHandler}
                />
                <h8 className="ml-5">End: </h8>
                <input type="time" size="4"
                name = "end_time"
                id = "end_time"
                value = {this.state.end_time}
                onChange = {this.changeHandler}
                />

            </div>
            <div className="mt-2">
                <h8 className="ml-5">Patient amount: </h8>
                <input type="text" size="4"
                name = "patient_amount"
                id = "patient_amount"
                value = {this.state.patient_amount}
                onChange = {this.changeHandler}
                />
                <h8 className="ml-5 mr-5">Location: </h8>
                <input type="text" size="4"
                name = "location"
                id = "location"
                value = {this.state.location}
                onChange = {this.changeHandler}
                />
            </div>
            <p className="ml-3">Address details:</p>
            <textarea className="ml-5" rows="4" cols="50"
                name = "address"
                id = "address"
                value = {this.state.address}
                onChange = {this.changeHandler}
            />
            <div className="ml-2 mt-2">
            <button className="btn btn-outline-primary button">Submit</button>
            </div>

        </form>

          </div>
      )
    }
    else if(this.props.value.Survey) {
       output=(
         <div className="Survey-box">
             <h5 className="ml-3 mt-3">Survey Disease:   </h5>
             <div className="mt-3">
                <h8 className="ml-5">Disease Name: </h8>
                <input type="type" size="4"/>
                <h8 className="ml-5">Filter Time: </h8>
                <input type="type" size="4"/>
             </div>
             <div className="announcement">
                <button className="btn btn-outline-primary">Create Announcement</button>
             </div>
        </div>
       )
    }



    return(
      <div>
       {output}
      </div>
    )
  }
}

export default Controller

/*
                <h8>Avaliable  </h8>
                <input type="Radio"
                name = "avaliable"
                id = "avaliable"
                value = {this.state.avaliable}
                onChange = {this.changeHandler}
                />


*/
