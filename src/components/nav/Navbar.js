import React, { Component } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import './Navbar.css'
import FriendsList from '../friends/FriendsList'

class NavBar extends Component {
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  };

  render(){

    return (
      <header className ="navbarHead">


        <h1 className="title is-3">Pass A Note<br />
          <small>The easiest way to share notes online</small>
        </h1>
        <nav>
          <ul className="container">
          <img class="ProfilePic" src={`images/aryn.jpg`}/> 
            <li><Link className="nav-link" to="/">Home</Link></li>
            {/* <li><Link className="nav-link" to="/notebooks">Notebooks</Link></li> */}
            {/* <li><Link className="nav-link" to="/login">Login</Link></li> */}
            {/* <li><Link className="nav-link" to="/tasks">Tasks</Link></li>
            <li><Link className="nav-link" to="/deadlines">Dates</Link></li> */}
            {this.props.user ? (
              <li>
                <Link className="nav-link" to="/friends">
                  Friends
                </Link>
              </li>
            ) : (
              <Redirect to="/login" />
            )}
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
