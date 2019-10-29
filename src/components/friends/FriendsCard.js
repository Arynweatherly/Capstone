

import React, { Component } from 'react';
import './friend.css'
import { Link } from "react-router-dom"

class FriendCard extends Component {
    render() {
        console.log('friend Ids', this.props.friend.id)
        return (
            <div className="friendCardNav">
            <h4 className="friendHeading">{this.props.friend.user.name}</h4>
            {/* <Link className="nav-link" to={`/notebooks/${this.props.friend.user.id}`} ><button type="button" className="view-friend-notes-btn">view notes!</button></Link> */}
            <button type="button" className="deleteFriend" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Remove Friend</button>
            <button type="button" className="viewNotebooks" onClick={() => this.props.getFriendsNotebooks(this.props.friend.userId)}>View Notebooks</button>
            </div>
        )
    }
}

export default FriendCard;