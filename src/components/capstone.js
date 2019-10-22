import React, { Component } from "react"
import NavBar from "./nav/Navbar"
import ApplicationViews from "./ApplicationViews"

import "./capstone.css"

class Capstone extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }
}

export default Capstone