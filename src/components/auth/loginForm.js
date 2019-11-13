import React, { Component } from "react";
import AuthManager from "../../modules/AuthManager"
import Header from '../nav/header'
import { Link, Route, withRouter, Redirect } from "react-router-dom";

export default class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    userId: "",
    users: []
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = () => {
    this.state.users.map(user => {
      if (
        user.username === this.state.username &&
        user.password === this.state.password
      ) {
    
        let credentials = user.id
        let box = document.querySelector(".remember");
        if(box.checked === true){
          this.props.rememberMe(credentials);
          this.props.history.push("/")
        } else {
          this.props.setUser(credentials);
          this.props.history.push("/");
        }
      } else {
      
        // return this.props.history.push("/login/register-form");
      }
    });
  };

  getData = e => {
    AuthManager.getAll("users").then(users => {
      this.setState({
        users: users
      });
    });
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
      <Header />
      <div className="box container login">
        <section className="is-centered">
          <p className="title is-4">Join Pass A Note:</p>
        </section>
      <form>
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

            <button type="button" className="button is-primary" onClick={this.handleLogin}>
              Sign In
            </button>
          </form>
        </div>
      </>
      )
    }
  }
