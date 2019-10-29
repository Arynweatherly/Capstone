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
import DeadlineList from './deadlines/DeadlineList'
import DeadlineForm from './deadlines/DeadlineForm'
import DeadlineEditForm from './deadlines/EditDeadlineForm'
import ReviewList from './reviews/ReviewList'
import ReviewDetails from './reviews/ReviewDetails'
import ReviewForm from './reviews/ReviewForm'
import NoteList from './notes/NotesList'
import NoteForm from './notes/NotesForm'
import NoteDetail from './notes/NoteDetail'
import NoteEditForm from './notes/EditNoteForm'
import LoginForm from './auth/loginForm'
import Login from './auth/Login'
import UserForm from './auth/registerForm'
import FriendList from './friends/FriendsList'
import FriendNotebookList from './friendNotebooks/FriendNotebookList'

//only include these once they are built - previous practice exercise
class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null;
    isRemebered = () => localStorage.getItem("credentials") !== null;

  render() {

    //seeing if isAuthenticated works
    console.log(this.props)
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />

        <Route path="/notebooks/:notebookId(\d+)/" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
            return <NoteList notebookId={parseInt(props.match.params.notebookId)} {...props}/>
        }} />
         <Route exact path="/notes/:notebookId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <NoteDetail notebookId={parseInt(props.match.params.notebookId)} {...props}/>
        }} />
        <Route path="/notes/new/:notebookId(\d+)/" render={(props) => {
            return <NoteForm {...props} />
        }} />
        {/* <Route path="/notes/:noteId(\d+)/edit" render={props => {
            return <NoteEditForm {...props} />
        }} /> */}
         <Route exact path="/notes/:noteId(\d+)/edit" render={props => {
            return <NoteEditForm {...props} />
        }} />


          <Route exact path="/notes/:noteId(\d+)/" render={(props) => {
            return <ReviewList noteId={parseInt(props.match.params.noteId)} {...props}/>
          }} />
          <Route path="/reviews/new" render={(props) => {
          return <ReviewForm {...props} />
          }} />
          <Route exact path="/reviews/:noteId(\d+)" render={(props) => {
        // Pass the reviewId to the ReviewDetailComponent
        return <ReviewDetails noteId={parseInt(props.match.params.noteId)} {...props}/>
        }} />


        {/* <Route exact path='/notebooks/:userId/' render={} */}

        <Route exact path="/notebooks" render={(props) => {
                return <NotebookList {...props} />
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


        <Route exact path="/deadlines" render={(props) => {
            return <DeadlineList {...props} />
        }} />
        <Route path="/deadlines/new" render={(props) => {
            return <DeadlineForm {...props} />
        }} />
        <Route path="/deadlines/:deadlineId(\d+)/edit" render={props => {
    return <DeadlineEditForm {...props} />
  }}

/>




<Route
          exact
          path="/friends"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <FriendList currentUser={this.props.currentUser} {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

      
<Route
          exact
          path="/login"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return <Login {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/login/register-form"
          render={props => {
            if (this.isAuthenticated || this.isRemebered) {
              return (
                <UserForm
                  rememberMe={this.props.remeberMe}
                  setUser={this.props.setUser}
                  {...props}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/login/login-form"
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
              return <Redirect to="/login" />;
            }
          }}
        />
      </React.Fragment>
    )
  }
}

export default ApplicationViews