import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';

class Registration extends Component {
	// Set initial state
	state = {
		regUserName: '',
		regPassword: '',
		regName: '',
		regImage: '',
        regPasswordConfirm: '',
        email: ''
	};

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleRegistration = e => {
		e.preventDefault();
		let username = this.state.regUserName;
		let password = this.state.regPassword;
		let name = this.state.regName;
		let image = this.state.regImage
        let passwordConfirm = this.state.regPasswordConfirm;
        let email = this.state.email
		// starting the if statement
		if (password !== passwordConfirm) {
			// if pass isn't equal to passConfirm
			alert('Please make sure  use the same password');
			// if both password fields are empty
		} else if (password === '' || passwordConfirm === '') {
			alert('Please fill the Password Form');
		} else if (username === '') {
			alert('Please enter a valid user name');
		} else {
			const newUser = {
				username: username,
				password: password,
                name: name
                
			};
			AuthManager.createUser(newUser).then(response => {
				//response[0].id is the ID of the user you logged in with,
				//in case of "Steve" it would be "1"
				this.props.setUser(response.id);
				this.props.history.push(`/mytrips`);
			});
		}
	};

	render() {
		return (
			<>
				<form
					onSubmit={this.handleRegistration}
					id='loginForm'
					className='login-form'
				>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							id='regUserName'
							type='username'
							placeholder='User Name'
							required=''
							autoFocus=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='name'
							id='regName'
							placeholder='Name'
							required=''
							autoFocus=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='password'
							id='regPassword'
							placeholder='Password'
							required=''
						/>
					</div>
					<div className='formField'>
						<input
							onChange={this.handleFieldChange}
							type='password'
							id='regPasswordConfirm'
							placeholder='Confirm Password'
							required=''
						/>
					</div>
					<div className='formField'>
						{/* <Checkbox>Remember me</Checkbox> */}
						<button type='submit' className='login-form-button'>
							Log in
						</button>
						<p className='regLink' onClick={this.props.hideReg} href=''>
							Go back to Login!
						</p>
					</div>
				</form>
			</>
		);
	}
}

export default Registration;