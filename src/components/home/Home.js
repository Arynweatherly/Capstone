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
    <>
    {/* <div class="columns">
  <div class="column is-12 title">Pass a Note Profile Page</div>
  <p className="subtitle is-5">Logged in user is {this.props.activeUser.username}</p>
</div> */}

<div class="columns">
  <div class="column is-3">
  <img src={`images/aryn.jpeg`}/> 
  </div>
  <div class="column"></div>
  <div class="column "></div>
</div>


<div class="tile is-ancestor">
  <div class="tile is-parent is-4 friends">
    <article class="tile is-child box pic">
      <div class="content">
      <img src={`images/friends1@2x.png`}/> 
      <p class="title">Friends List</p>
      <Card className="friendsListCard">
         <FriendsList className="friendListContainer"
         currentUser={this.props.currentUser} 
         activeUser={this.props.activeUser}
         {...this.props}
         />
       </Card>
      </div>
    </article>
  </div>

  <div class="tile is-vertical is-parent">
    <div class="tile is-child box notebooks">
      <p class="title">Notebooks</p>
      <p class="home-notebooks"> 
    <NotebookList  
   currentUser={this.props.currentUser}
   activeUser={this.props.activeUser}
   {...this.props}
   /></p>
   <div className="noteImgContainer">
        <img className= "imgHomeNotebook" src={`images/note1.png`}/> 
  </div>
    </div>
    <div class="tile is-child box deadlines">
    <p class="title">Deadlines</p>
      <div class="columns">
      <div class="column">
    <p class="bd-notification is-info"></p>
    <div class="columns is-mobile">
      <div class="column">
      <p><DeadlineList
currentUser={this.props.currentUser}
activeUser={this.props.activeUser}
{...this.props}
/></p>
      </div>
      <p />
      <div className="deadlineImgContainer">
        <img className= "deadlineImgHome" src={`images/schedule2.png`}/>
  </div>
    </div>
  </div>
  </div>
    </div>
    <div class="tile is-child box tasks">
      <p class="title">Tasks</p>
      <p><TaskList
currentUser={this.props.currentUser}
activeUser={this.props.activeUser}
{...this.props}
/></p>
    </div>

  </div>

</div>
    </>
    )
  }
}

export default Home