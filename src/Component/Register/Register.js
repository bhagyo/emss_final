import React, { Component } from 'react'
import './Register.css';
import axios from 'axios'

const REGISTER_URL = 'http://0.0.0.0:8000/api/register/' // received api ulr...

const initiaState = {

		first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        address: {
            division: '',
            district: '',
            upozilla: '',
            address: ''
        },
        date_of_birth: null,
        is_doctor: false
	}

class Register extends Component{


	constructor(props){
		super(props)

		this.myRegister = React.createRef()


		this.state = {
		...initiaState
	}

	}




	changeHandler = (event) => {



		if(event.target.id == "division" || event.target.id == "district" ||
			event.target.id == "upozilla" || event.target.id =="address")  {

			let address =  this.state.address ;
		    let index = event.target.id;
		    let value = event.target.value;

        address = {...address, [index]: value};
        this.setState({ address });


		}
		else {
			this.setState({
	    	[event.target.name]: event.target.value
	    })
		}

	}

	submitHandler = (event) =>{
		const {
			first_name,
            last_name,
            username,
            email,
            password,
            password_confirmation,
            address:{
                division,
                district,
                upozilla,
                address
            },
            date_of_birth,
            is_doctor,
		} = this.state;

		const postData = {

            first_name : first_name,
            last_name : last_name,
			username : username,
			email : email,
			password : password,
			password_confirmation : password_confirmation,
			address : {
			"division" : division,
			"district": district,
			"upozilla" : upozilla,
			"address" : address
			},
			date_of_birth : date_of_birth,
			is_doctor: false,

		};
		event.preventDefault()
		console.log(this.state)
		this.myRegister.current.reset()
		console.log("post_data: "+ postData.address.division + postData.address.district);
		axios.post(REGISTER_URL,postData)
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



	render(){

		return(


			<div className="Register-box">

			<form ref = {this.myRegister} className="Form" onSubmit={this.submitHandler }>
			    <div className ="form-group ">
                  <label htmlFor="first_name" >First Name: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  First Name '
                   name = "first_name"
                   id = "first_name"
                   value = {this.state.first_name}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group ">
                  <label htmlFor="last_name" >Last Name: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  Last Name '
                   name = "last_name"
                   id = "last_name"
                   value = {this.state.last_name}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group ">
                  <label htmlFor="username" >User Name:</label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  User Name '
                   name = "username"
                   id = "username"
                   value = {this.state.username}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="email" > Email: </label>
                   <input
                   className = "from-control ml-4"
                   type="text"
                   placeholder = '  Enter Your Email '
                   name = "email"
                   id = "email"
                   value = {this.state.email}
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

                <div className ="form-group">
                  <label htmlFor="password_confirmation" className="mr-4"> Password Confirmation: </label>
                   <input
                   className = "from-control ml-2"
                   type="password"
                   placeholder = '  Password Confirmation'
                   name = "password_confirmation"
                   id = "password_confirmation"
                   value = {this.state.password_confirmation}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="division" className="mr-4"> Division: </label>
                   <input
                   className = "from-control ml-2"
                   type="text"
                   placeholder = ''
                   name = "address.division"
                   id = "division"
                   value = {this.state.address.division}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="district" className="mr-4"> District: </label>
                   <input
                   className = "from-control ml-2"
                   type="text"
                   placeholder = ''
                   name = "address.district"
                   id = "district"
                   value = {this.state.address.district}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="upozilla" className="mr-4"> Upozilla: </label>
                   <input
                   className = "from-control ml-2"
                   type="text"
                   placeholder = ''
                   name = "address.upozilla"
                   id = "upozilla"
                   value = {this.state.address.upozilla}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="address" className="mr-4"> Address: </label>
                   <input
                   className = "from-control ml-2"
                   type="text"
                   placeholder = ''
                   name = "address.address"
                   id = "address"
                   value = {this.state.address.address}
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="date_of_birth" className="mr-4"> Date of Birth: </label>
                   <input
                   className = "from-control ml-2"
                   type="date"
                   name = "date_of_birth"
                   id = "date_of_birth"
                   value = {this.state.date_of_birth}
                   onChange = {this.changeHandler}
                   />
                </div>



                <button className = "btn btn-primary" type="submit" value="Submit"> Submit </button>
            </form>



			</div>






		);

	}
}

export default Register;
