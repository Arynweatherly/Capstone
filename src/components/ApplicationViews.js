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

    

  render() {

    //seeing if isAuthenticated works
    console.log('activeUser on app', this.props.activeUser)
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home activeUser={this.props.activeUser}/>
        }} />

        <Route path="/notebooks/:notebookId(\d+)/" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
            return <NoteList notebookId={parseInt(props.match.params.notebookId)} activeUser={this.props.activeUser} {...props}/>
        }} />
         <Route exact path="/notes/:notebookId(\d+)" render={(props) => {
        // Pass the animalId to the AnimalDetailComponent
        return <NoteDetail notebookId={parseInt(props.match.params.notebookId)}activeUser={this.props.activeUser} {...props}/>
        }} />
        <Route path="/notes/new/:notebookId(\d+)/" render={(props) => {
            return <NoteForm activeUser={this.props.activeUser} {...props} />
        }} />
        {/* <Route path="/notes/:noteId(\d+)/edit" render={props => {
            return <NoteEditForm {...props} />
        }} /> */}
         <Route exact path="/notes/:noteId(\d+)/edit" render={props => {
            return <NoteEditForm activeUser={this.props.activeUser} {...props} />
        }} />


          <Route exact path="/notes/:noteId(\d+)/" render={(props) => {
            return <ReviewList noteId={parseInt(props.match.params.noteId)} activeUser={this.props.activeUser} {...props}/>
          }} />
          <Route path="/reviews/new" render={(props) => {
          return <ReviewForm activeUser={this.props.activeUser} {...props} />
          }} />
          <Route exact path="/reviews/:noteId(\d+)" render={(props) => {
        // Pass the reviewId to the ReviewDetailComponent
        return <ReviewDetails noteId={parseInt(props.match.params.noteId)} activeUser={this.props.activeUser} {...props}/>
        }} />


        {/* <Route exact path='/notebooks/:userId/' render={} */}

        <Route exact path="/notebooks" render={(props) => {
                return <NotebookList activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/notebooks/new" render={(props) => {
            return <NotebookForm activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/notebooks/:notebookId(\d+)/edit" render={props => {
            return <NotebookEditForm activeUser={this.props.activeUser} {...props} />
        }} />
        

        <Route exact path="/tasks" render={(props) => {
                return <TaskList activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/tasks/new" render={(props) => {
            return <TaskForm activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/tasks/:taskId(\d+)/edit" render={props => {
            return <TaskEditForm activeUser={this.props.activeUser} {...props} />
        }} />


        <Route exact path="/deadlines" render={(props) => {
            return <DeadlineList activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/deadlines/new" render={(props) => {
            return <DeadlineForm activeUser={this.props.activeUser} {...props} />
        }} />
        <Route path="/deadlines/:deadlineId(\d+)/edit" render={props => {
    return <DeadlineEditForm  activeUser={this.props.activeUser} {...props} />
  }}

/>




<Route
          exact
          path="/friends"
          render={props => {
            if (this.props.user) {
              return <FriendList currentUser={this.props.currentUser} activeUser={this.props.activeUser} {...props} />;
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