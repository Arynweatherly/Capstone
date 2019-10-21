import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import NotebookDetail from './notebooks/NotebookDetails'
import NotebookCard from './notebooks/NotebookCard'
import NotebookList from './notebooks/NotebookList'
import NotebookForm from './notebooks/NotebookForm'
import Login from './auth/Login'
//only include these once they are built - previous practice exercise
class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/notebooks" render={(props) => {
            if (this.isAuthenticated()) {
                return <NotebookList {...props} />
            }else {
          return <Redirect to="/auth"  />
            }
        }} />
        <Route path="/notebooks/:notebookId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
            return <NotebookDetail notebookId={parseInt(props.match.params.notebookId)}/>
        }} />
        <Route path="/notebooks/new" render={(props) => {
            return <NotebookForm {...props} />
        }} />
        <Route path="/auth" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews