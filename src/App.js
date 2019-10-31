//this is the same as kennel.js

import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { all } from 'q';
import ApplicationViews from "./components/ApplicationViews";
import Navbar from "./components/nav/Navbar"
import { Route, withRouter, Redirect} from "react-router-dom";
import Login from "./components/auth/Login"


class App extends Component {
  state = {
		user: sessionStorage.getItem('activeUser') !== null,
		activeUser: this.getUser()
	};

	isAuthenticated = () => sessionStorage.getItem('activeUser') !== null;

	setUser = id => {
		sessionStorage.setItem('activeUser', id);
		this.setState({ activeUser: this.getUser(), user: true });
	};

	getUser() {
		if (sessionStorage.getItem('activeUser')) {
			return parseInt(sessionStorage.getItem('activeUser'));
		} else {
			return '';
		}
	}

	clearUser = () => {
		sessionStorage.removeItem('activeUser');
		this.setState({
			user: this.isAuthenticated()
		});
	};

  render() {
		// console.log('app.js user', this.state.activeUser);
		return (
			<div className='App'>
				{/* <div className='darkMode'></div> */}
				{this.state.user ? (
					<>
						<Navbar
							clearUser={this.clearUser}
							user={this.state.user}
							{...this.props}
							activeUser={this.state.activeUser}
						/>
						<ApplicationViews
							user={this.state.user}
							{...this.props}
							activeUser={this.state.activeUser}
						/>
					</>
				) : (
					<Login
						getUser={this.getUser}
						setUser={this.setUser}
						user={this.state.user}
						{...this.props}
						activeUser={this.state.activeUser}
					/>
				)}
			</div>
		);
	}
}


export default App;
