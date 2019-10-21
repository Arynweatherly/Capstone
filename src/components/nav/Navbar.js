import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Navbar.css'

class NavBar extends Component {

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
            <li>Tasks</li>
            <li>Dates</li>
            <li>Friends</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;