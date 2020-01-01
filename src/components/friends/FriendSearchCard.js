import React, { Component } from "react";

class FriendSearchCard extends Component {
  render() {
    return (
      <div className="friendSearchRow">
        <h5>{this.props.friend.name}</h5>
        <button
          type="button"
          className="btn"
          onClick={() => this.props.addFriend(this.props.friend.id)}
        >
          follow
        </button>
      </div>
    );
  }
}

export default FriendSearchCard;
