import React, { Component } from 'react'
import './DoctorLogin.css';
import axios from 'axios'

const REGISTER_URL = 'http://127.0.0.1:8000/api/doctorlogin/'
//const REGISTER_URL='https://reqres.in/api/login/'


const initiaState = {

        username: '',
        password: ''
  }

class DoctorLogin extends Component {

    constructor(props){
        super(props);

        this.myLogin = React.createRef()

        this.state = {
         ...initiaState
        }
    }

    changeHandler = (event) => {
      console.log("name: "+event.target.name+" value: "+event.target.value)
      this.setState({
        [event.target.name]: event.target.value
      })
    }


    doctorloginHandler = (event) =>{
      const {

        username,
        password,

      } = this.state;


      const postData = {


      username: username,
      password : password,

    };

    event.preventDefault()
    this.myLogin.current.reset()

    console.log("hlw..............");

    axios.post(REGISTER_URL,postData)
    .then(res =>{
      console.log(res+"  yo yo....");
      if(res.data.code == 200){
        console.log("Successful Login Doctor");
      }
      else if(res.data.code == 101){
        console.log("UnSuccessful Login");
      }

    })
    .catch(error =>{
      console.log("ERROR::: "+error);
    })


    this.setState({
      ...initiaState
    });


    }


    doctorRegisterHandler(){
        this.props.doctorRegisterClickHandler();
    }




/*jobayer code start here */

    CreateaHandlerFunction = (e) =>{

    const {

        username,
        password,

      } = this.state;

     const postData = {


      username : username,
      password : password

    };

          e.preventDefault()

      console.log(e.target.id+"   ..........bal");







    // event.preventDefault()
    // this.myLogin.current.reset()

    console.log("hlw..............");
    //return;

    axios.post(REGISTER_URL,postData)
    .then(res =>{
      console.log("Response object start")
      console.log(res);
      console.log("Response object end")
      //console.log(res+"  yo yo....");
      if(res.status == 200){
        console.log("Successful Login Doctor");
      //  var name = username;
        var data ={
          name:username,
          user_id:res.data.user_id
        }
        this.props.afterDoctorLoginHandler(data)

      }
      else if(res.data.code == 101){
        console.log("Successful Login");
      }

    })
    .catch(error =>{
      console.log("ERROR::: "+error);
    })
/*jobayer code end here */
    }
    render(){
        return(
            <div className="Login-box">
            <form ref = {this.myLogin}  className="Form" onLogin={this.loginHandler }>
            <div className ="form-group">
                  <label htmlFor="username" > Username: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  Enter Your username'
                   name = "username"
                   id = "username"
                   value = {this.state.username}
                   onChange = {this.changeHandler}

                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="password" className="mr-4"> Password: </label>
                   <input
                   className = "from-control ml-2"
                   type="password"
                   placeholder = '  Enter Your Password '
                   name = "password"
                   id = "password"
                   value = {this.state.password}
                   onChange = {this.changeHandler}

                   />
                </div>



                <a href="#" id="login-btn" onClick={this.CreateaHandlerFunction}>Login</a>
                <p>Create new account?
                    <button className = "btn btn-primary mr-4"
                    onClick={event=>this.doctorRegisterHandler()}
                    type="register"
                    value="Register">
                    Register
                    </button>
                </p>


            </form>
            </div>
        )
    }
}

export default DoctorLogin;
