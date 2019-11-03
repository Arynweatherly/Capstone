import React, { Component } from 'react';
import AuthManager from '../../modules/AuthManager';
import Register from '../auth/Register';
import { withRouter } from 'react-router-dom';
import Header from '../nav/header'
// import { Spring } from 'react-spring/renderprops';

class Login extends Component {
	// Set initial state
	state = {
		username: '',
		password: '',
		hideReg: true
	};

	showLogin = () => {
		this.setState({ hideReg: false });
	};

	hideReg = () => {
		this.setState({ hideReg: true });
	};

	// Update state whenever an input field is edited
	handleFieldChange = evt => {
		const stateToChange = {};
		stateToChange[evt.target.id] = evt.target.value;
		this.setState(stateToChange);
	};

	handleLogin = e => {
		e.preventDefault();
		let username = this.state.username;
		let password = this.state.password;
		AuthManager.getUser(username).then(response => {
      console.log('response' , response)
			if (response.length === 0) {
				alert('Please enter a valid User Name.');
			} else if (response.length === 1 && response[0].password !== password) {
				alert('Password is incorrect, please try again.');
				// starting the if statement to check for empty fields//
			} else if (password === '') {
				alert('Please fill the Password Form');
			} else if (username === '') {
				alert('Please enter a valid email address');
			} else if (response[0].password === password) {
				//response[0].id is the ID of the user you logged in with,
				//in case of "Steve" it would be "1"
				this.props.setUser(response[0].id);
				this.props.history.push(`/`);
			}
		});
	};

	render() {
    console.log(this.state.username)
		return (
			<>
			{this.state.hideReg && (
			<>
			<Header />
			<div className="box container login">
				<section className="is-centered">
					<p className="title is-4">Join Pass A Note</p>
				</section>
				<form
				onSubmit={this.handleLogin}
				id='loginForm'
				className='login-form'>

				<div className="field">
					<label className="label"></label>
					<div className="control">
					<input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="text"
                  id="username"
                  placeholder="Username"
                  required=""
                  autoFocus=""
                />
              </div>
            </div>
			<div className="field">
              <label className="label"></label>
              <div className="control">
                <input
				prefix={
					<icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
				}
                  className="input"
                  onChange={this.handleFieldChange}
                  type="password"
                  id="password"
                  placeholder="Password"
                  required=""
                ></input>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input className="remember checkbox" type="checkbox"/>
                   Remember Me
                </label>
              </div>
            </div>
			<button type="button" className="button is-primary" onClick={this.handleLogin}>Sign In
			</button>
				<p className='regLink' onClick={this.showLogin} href=''>
									Or register now!
								</p>
			
			</form>
			</div>
			</>
			)}
				{!this.state.hideReg && (
			
					<Register {...this.props} hideReg={this.hideReg} />
				
				)}
			</>
		);
	}
}

export default withRouter(Login);