import React, { Component } from 'react'
import FriendsList from '../friends/FriendsList'
import NotebookList from '../notebooks/NotebookList'
import DeadlineList from '../deadlines/DeadlineList'
import TaskList from '../tasks/TaskList'
import { Card } from 'reactstrap'
import './home.css'
import { Button } from 'antd';
import { Link } from "react-router-dom"




class Home extends Component {
  render() {
    return (
   <div>
     <h2> Pass a Note Profile Page</h2>
     <br />
     <small>some sort of slogan</small>
     <div className='logoPlaceholder'>
					<img
						alt='logo'
						height='153px'
						width='145px'
						src={`/images/userPic.jpg`}
					></img>
				</div>


     {
       <>
       <Card className="profilePic" />

       <Card className="friendsListCard">
         <FriendsList className="friendListContainer"
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>



       <Card className="notebooksCardContainer">
          <div className="notebooksBtn">
          <Link className="nav-link" to="/notebooks"><button type="button" className="btn-to-notebooks">NOTEBOOKS</button></Link>
          </div>
       </Card>


       <Card className="deadlineCardContainer">
         <DeadlineList 
         currentUser={this.props.currentUser}
         {...this.props}
         />
       </Card>
       <Card className="tasksCard">
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