

import React, { Component } from 'react';
import './friend.css'
import { Link } from "react-router-dom"

class FriendCard extends Component {
    render() {
        console.log('friend Ids', this.props.friend.id)
        return (
            

<div class="box friends">
<article class="media">
  <div class="media-left">

    <figure class="image is-64x64">
    <img className="friendProfilePic" src={require(`../../images/${this.props.friend.user.url}`)}  />

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
<hr />
<button type="button"  onClick={() => this.props.deleteFriend(this.props.friend.id)}>Unfollow</button>
<button type="button" onClick={() => this.props.getFriendsNotebooks(this.props.friend.userId)}>View Notebooks</button>
</div>

        )
    }
}

export default FriendCard;