import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import NotebookDetail from './notebooks/NotebookDetails'
import NotebookCard from './notebooks/NotebookCard'
import NotebookEditForm from './notebooks/EditNotebookForm'
import NotebookList from './notebooks/NotebookList'
import NotebookForm from './notebooks/NotebookForm'
import TaskForm from './tasks/TaskForm'
import TaskEditForm from './tasks/EditTaskForm'
import TaskList from './tasks/TaskList'
import LoginForm from './auth/loginForm'
import Login from './auth/login'
import UserForm from './auth/registerForm'
//only include these once they are built - previous practice exercise
class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {

    //seeing if isAuthenticated works
    console.log(this.props)
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route exact path="/notebooks" render={(props) => {
                return <NotebookList {...props} />
        }} />
        <Route path="/notebooks/:notebookId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
            return <NotebookDetail notebookId={parseInt(props.match.params.notebookId)} {...props}/>
        }} />
        <Route path="/notebooks/new" render={(props) => {
            return <NotebookForm {...props} />
        }} />
        <Route path="/notebooks/:notebookId(\d+)/edit" render={props => {
            return <NotebookEditForm {...props} />
        }} />

        <Route exact path="/tasks" render={(props) => {
                return <TaskList {...props} />
        }} />
        <Route path="/tasks/new" render={(props) => {
            return <TaskForm {...props} />
        }} />
        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm {...props} />
        }} />

        <Route
          exact path="/auth/login-form"
          render={props => {
            // if (this.isAuthenticated || this.isRemebered) {
              return (
                <LoginForm
                  rememberMe={this.props.rememberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              )
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