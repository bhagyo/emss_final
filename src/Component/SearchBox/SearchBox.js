import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import './SearchBox.css';
import Location from './Location/Location'
import Doctor from './Doctor/Doctor'
class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: '',
      doctor:''
    }
  }

  takeLocation = (newlocation)=>{

    this.setState({
      ...this.state,
      location: newlocation
    })

    console.log(this.state.location);

  }
  takeDoctor = (newdoctor)=>{

    this.setState({
      ...this.state,
      doctor: newdoctor
    })
    console.log(this.state.doctor);
  }

  searchHandler = (event)=>{
    const {

        location,
        doctor,

      } = this.state;


      const data = {

      location: location,
      doctor: doctor,

    };
    this.props.searchData(data);
  }

  render() {


    return(
      <div className="container my-5">
        <h3 className="text-center display-5 text-info my-3">Hunt your Doctor</h3>

        <div className="row">
            <div className="col-sm-0 col-lg-2"></div>
            <div className="col-sm-12 col-lg-8">
              <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-lg-3 mx-0 px-0 my-1">
                        <div className="input-group mx-0 px-0">
                          <Location className="Location"
                          locationChangeHandler={this.takeLocation.bind(this)}
                          />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-7 mx-0 px-0 my-1">
                        <div className="input-group mx-0 px-0">
                          <Doctor
                          doctorChangeHandler={this.takeDoctor.bind(this)}
                          />
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-2 mx-0 px-0 my-1">
                        <div className="input-group mx-0 px-0">
                          <button className="btn btn-primary btn-block"
                          onClick={event=>this.searchHandler()}
                          >Search</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-0 col-lg-2"></div>
            </div>
      </div>
    )
  }
}
export default SearchBox;
