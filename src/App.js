//this is the same as kennel.js

import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { all } from 'q';
import ApplicationViews from "./components/ApplicationViews";
import NavBar from "./components/nav/Navbar";
import { Route, withRouter, Redirect} from "react-router-dom";
class App extends Component {
  state = {
    user: "",
    currentUser: ""
  };

  //function that checks if there's a user logged in 
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  isRemembered = () => localStorage.getItem("credentials") !== null;


//set user
  setUser = authUser => {
    sessionStorage.setItem("credentials", JSON.stringify(authUser));
//this sets state
    this.setState({
      user: true,
      currentUser: this.getUser()

    });
  };

  getUser = () => {
    if(this.isAuthenticated){
      return parseInt(sessionStorage.getItem("credentials"))
    } else if(this.isRemembered){
      return parseInt(localStorage.getItem("credentials"))
    } else {
      return <Redirect to="/auth" />
    }
  }

  rememberMe = user => {
    localStorage.setItem(
      "credentials",
      JSON.stringify(user))
      this.setState({
        user: true,
        currentUser: this.setUser()
      });
  }

  clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();

		this.setState({
			user: this.isAuthenticated()
		});
  };
  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} {...this.props}/>
        <ApplicationViews currentUser={this.state.currentUser} rememberMe={this.rememberMe} user={this.state.user} setUser={this.setUser} />
      </>
    );
  }
}

export default App;
