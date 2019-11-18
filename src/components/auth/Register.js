import React, { Component } from "react";
import AuthManager from "../../modules/AuthManager";
import Header from "../nav/header";
class Registration extends Component {
  // Set initial state
  state = {
    regUserName: "",
    regPassword: "",
    regName: "",
    regPasswordConfirm: "",
    email: ""
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
    let passwordConfirm = this.state.regPasswordConfirm;
    let email = this.state.email;
    // starting the if statement
    if (password !== passwordConfirm) {
      // if pass isn't equal to passConfirm
      alert("Please make sure  use the same password");
      // if both password fields are empty
    } else if (password === "" || passwordConfirm === "") {
      alert("Please fill the Password Form");
    } else if (username === "") {
      alert("Please enter a valid user name");
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
        <Header />
        <div className="box container login">
          <section className="is-centered">
            <p className="title is-4">Join Pass A Note:</p>
            <img className="loginImg" src={`/images/Login54.png`} />
          </section>

          <form
            onSubmit={this.handleRegistration}
            id="loginForm"
            className="login-form"
          >
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  id="regUserName"
                  type="username"
                  placeholder="User Name"
                  required=""
                  autoFocus=""
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="name"
                  id="regName"
                  placeholder="Name"
                  required=""
                  autoFocus=""
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="password"
                  id="regPassword"
                  placeholder="Password"
                  required=""
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <input
                  className="input"
                  onChange={this.handleFieldChange}
                  type="password"
                  id="regPasswordConfirm"
                  placeholder="Confirm Password"
                  required=""
                />
              </div>
            </div>

            <div className="field">
              <div className="control">
                <button type="submit" className="register-form-button">
                  Log in
                </button>
                <p className="regLink" onClick={this.props.hideReg} href="">
                  Go back to Login!
                </p>
              </div>
              {/* <Checkbox>Remember me</Checkbox> */}
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Registration;
