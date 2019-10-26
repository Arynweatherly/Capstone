import React, { Component } from 'react'
import FriendsList from '../friends/FriendsList'
import NotebookList from '../notebooks/NotebookList'
import DeadlineList from '../deadlines/DeadlineList'
import TaskList from '../tasks/TaskList'
import { Card } from 'reactstrap'
import './home.css'

class Home extends Component {
  render() {
    return (
   <div>
     <h2> Pass a Note Profile Page</h2>
     <br />
     <small>some sort of slogan</small>
     {
       <>
       <Card className="friendsListCard">
         <FriendsList 
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>
       <Card>
         <NotebookList 
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>
       <Card>
         <DeadlineList 
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>
       <Card>
         <TaskList 
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>
       </>
     }
   </div>
    )
  }
}

export default Home