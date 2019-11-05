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
      <div className="home container">
        <section>
          <article className="media">
            <figure className="media-left">
              <p className="image">
              {/* <img src={require(`../../images/${this.props.currentUser.user.url}`)} alt="Animal" />
                <img src={`/images/profile.jpeg`}/> */}
              </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p className="title is-5"> Pass a Note Profile Page</p>
                <p className="subtitle is-5">Logged in user is {this.props.activeUser.username}</p>
                <p>Bio text here...</p>
              </div>
            </div>
          </article>
        </section>

     {/* <div className='logoPlaceholder'>
          <img
            alt='logo'
            height='20px'
            width='20px'
            src={`/images/userPic.png`}
          ></img>
        </div> */}


     {
          <section>
            <div className="tile is-ancestor">
              <div className="tile is-parent">

       <Card className="friendsListCard">
         <FriendsList className="friendListContainer"
         currentUser={this.props.currentUser} 
         activeUser={this.props.activeUser}
         {...this.props}
         />
       </Card>



       <Card className="notebooksCardContainer">
         <NotebookList className="notebookListHome"
         currentUser={this.props.currentUser}
         activeUser={this.props.activeUser}
         {...this.props}
         />
          {/* <div className="notebooksBtn">
          <Link className="nav-link" to="/notebooks"><button type="button" className="btn-to-notebooks">NOTEBOOKS</button></Link>
          </div> */}
       </Card>
 
       <Card className="deadlineCardContainer">
         <DeadlineList 
         currentUser={this.props.currentUser}
         activeUser={this.props.activeUser}
         {...this.props}
         />
       </Card>
       <Card className="tasksCard">
         <TaskList 
         currentUser={this.props.currentUser}
         activeUser={this.props.activeUser}
         {...this.props}
         />
       </Card>
      </div>
      </div>
      </section>
     }
   </div>
    )
  }
}

export default Home