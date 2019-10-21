import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import NotebookDetail from './notebooks/NotebookDetails'
import NotebookCard from './notebooks/NotebookCard'
import NotebookList from './notebooks/NotebookList'
import NotebookForm from './notebooks/NotebookForm'
import LoginForm from './auth/loginForm'
import Login from './auth/login'
import UserForm from './auth/registerForm'
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

        <Route
          exact path="/auth/login-form"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return (
                <LoginForm
                  rememberMe={this.props.rememberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/auth" />;
            }
          }}
        /> 

        <Route 
            exact path="/auth/register-form" render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return (
                <UserForm
                  rememberMe={this.props.remeberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/auth" />;
            }
          }}
        />

        <Route exact path="/auth" render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <Login {...props} />;
            } else {
              return <Redirect to="/auth" />;
            }
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews