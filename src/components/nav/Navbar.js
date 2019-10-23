import React, { Component } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import './Navbar.css'

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  };

  render(){

    return (
      <header>
        <h1 className="site-title">Pass A Note<br />
          <small>The easiest way to share notes online</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/notebooks">Notebooks</Link></li>
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li><Link className="nav-link" to="/deadlines">Dates</Link></li>
            <li>Friends</li>
            <li className='nav-item'>
							<button size='small' onClick={this.handleLogout}>Logout</button>
						</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default withRouter (NavBar);
