import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import NotebookCard from './notebooks/NotebookCard'
import NotebookList from './notebooks/NotebookList'
//only include these once they are built - previous practice exercise

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/notebooks" render={(props) => {
          return <NotebookList/>
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews