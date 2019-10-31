import React, { Component } from 'react'
import './Navbar.css'

class Header extends Component{
  render(){
    return(
      <header className="container">
        <section>
          <p className="title is-3">Pass A Note</p>
          <p className="subtitle is-5">The easiest way to share notes online</p>
        </section>
        {this.props.children}
      </header>
    )
  }
}
export default Header