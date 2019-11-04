

import React, { Component } from 'react';
import './friend.css'
import { Link } from "react-router-dom"

class FriendCard extends Component {
    render() {
        console.log('friend Ids', this.props.friend.id)
        return (
            // <div className="friendCardNav">
            // <h4 className="friendHeading">{this.props.friend.user.name}</h4>
            // {/* <Link className="nav-link" to={`/notebooks/${this.props.friend.user.id}`} ><button type="button" className="view-friend-notes-btn">view notes!</button></Link> */}
            // <button type="button" className="deleteFriend" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Remove Friend</button>
            // <button type="button" className="viewNotebooks" onClick={() => this.props.getFriendsNotebooks(this.props.friend.userId)}>View Notebooks</button>
            // </div>

<div class="box">
<article class="media">
  <div class="media-left">

    <figure class="image is-64x64">
      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
    </figure>
  </div>

  <div class="media-content">
    <div class="content">
      <p>
        <strong>{this.props.friend.user.name}</strong> 
      </p>
    </div>
</div>
</article>
<footer class="card-footer">
<button type="button" className="deleteFriend" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Remove Friend</button>
<button type="button" className="viewNotebooks" onClick={() => this.props.getFriendsNotebooks(this.props.friend.userId)}>View Notebooks</button>
    {/* <a href="#" className="deleteFriend" onClick={() => this.props.deleteFriend(this.props.friend.id)}>unfollow</a> <br />
    <a href="#" className="viewNotebooks" onClick={() => this.props.getFriendsNotebooks(this.props.friend.userId)}>View Notebooks</a> */}
    {/* <Link to={`/notebooks/${this.props.notebook.id}`}>View Notes</Link> */}
  </footer>
</div>

        )
    }
}

export default FriendCard;