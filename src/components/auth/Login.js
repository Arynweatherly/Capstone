import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css';

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="loginHome">
        <Link to="/login/login-form">
          <button type="submit" className="signInBtn">Login</button>
        </Link>
        <Link to="/login/register-form">
          <button type="button" className="registerBtn">Register</button>
        </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
