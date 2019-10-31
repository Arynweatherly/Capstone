// FriendsList renders every FriendCard where the user is friends with another user.

// This container lives on the nav bar at the bottom.

// FriendsList includes:
// 1. search input field with search functionality for other users.
// 2. A hidden form component to add friends, either modal or drawer.
// 3. A "+" button at the top of the FriendsList container where modal/drawer pops up to search/add friends.

import React, { Component } from 'react';
import FriendCard from './FriendsCard';
import FriendsManager from '../../modules/FriendsManager'
import FriendsSearch from './FriendsSearch'
import NotebookManager from '../../modules/NotebookManager'
import NotebookCard from '../notebooks/NotebookCard'

class FriendsList extends Component {
    //define what this component needs to render
    state = {
        friends: [],
        currentFriend: false,
        friendNotebooks: [],
        friendNotes: [],
        notebooks: false
    };

    deleteFriend = id => {
        FriendsManager.delete(id).then(() => {
            
            FriendsManager.getFriends(this.props.activeUser).then(newFriends => {
                this.setState({
                    friends: newFriends
                });
            });
        });
    };
    getFriendsNotebooks = id => {
        NotebookManager.getMyNotebooks(id).then((data) => {
            this.setState({
                friendNotebooks: data,
                notebooks: true
            })
            console.log('friendbooks', id)
        } )
    }

    addFriend = id => {
        const newFriend = {
            userId: id,
            friendInitiate: this.props.activeUser
        };

        FriendsManager.getFriends(this.props.activeUser).then(data => {
            data.forEach(obj => {
                if (obj.userId === id) {
                    this.setState({
                        currentFriend: true
                    });
                }
            });
    

            if (newFriend.userId === this.props.activeUser) {
                alert("sorry, you can't be friends with yourself.")
            } else if (this.state.currentFriend === true) {
                alert ("you're already friends with this user")
            } else {
                FriendsManager.post(newFriend).then(() => {
                FriendsManager.getFriends(this.props.activeUser).then(
                    newFriends => {
                        this.setState({
                            friends: newFriends
                        })
                            //call a set state function for all modules
                        }
                        )

                    })
                }
            })
            }


    componentDidMount() {
        //getAll from FriendsManager and hang on to that data, put in state 
        FriendsManager.getFriends(this.props.activeUser).then(friends => {
            this.setState({
                friends: friends
            })
        })
    }

    render() {
        console.log('active user friends list' , this.props.activeUser)
        return (
            <>
            <FriendsSearch {...this.props} addFriend={this.addFriend} />

            <div className="friends-container-card">
                <h4>Your Friends</h4>
                {this.state.friends.map(friend => (
                    <FriendCard
                        key={friend.id}
                        friend={friend}
                        deleteFriend={this.deleteFriend}
                        {...this.props}
                        getFriendsNotebooks={this.getFriendsNotebooks}
                        />
                ))}
            </div>
                {this.state.notebooks &&
            <div className="container-card-notebook">
        {this.state.friendNotebooks.map(notebook =>
          <NotebookCard
            key={notebook.id}
            notebook={notebook}
            deleteNotebook={this.deleteNotebook}
            {...this.props}
          />
        )}
      </div>
                }
            </>
        )
    }
}
export default FriendsList
