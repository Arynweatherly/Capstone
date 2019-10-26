import React, { Component } from "react"
import NavBar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews"
import { Spring } from 'react-spring/renderprops';
import Login from './auth/Login';

import "./capstone.css"

class Capstone extends Component {

  render() {
    return (
      <>
          <div>
            <section className="wrapper">
            <NavBar
									/>
									<ApplicationViews
									/>
            </section>
          </div>
      </>
    )
  }
}

export default Capstone