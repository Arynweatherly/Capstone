// import React, { Component } from 'react';

// class FriendCard extends Component {
//     render() {
//         return (
//             <div className="friendCard">
//                 <img //put image here // 
//                 />
            
//             <h6>{this.props.friend.user.username}</h6>
//             <button type="button" className="btn" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Delete</button>

//             </div>
//         )
//     }
// }

// export default FriendCard


// import React, { Component } from "react";
// import "./friend.css";
// import {
//   Card,
//   CardTitle,
//   CardText,
//   CardImg,
//   CardBody,
//   CardDeck,
//   CardSubtitle,
//   Button
// } from "reactstrap";

// export default class FriendCard extends Component {
//   render() {
//     // console.log(this.props.friend.user.username);
//     return (
//       <div>
//         <Card>
//           <CardBody className="cardBody">
//               {this.props.friend.user.username}
//             <Button color="primary">Delete</Button>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import './friend.css'

class FriendCard extends Component {
    render() {
        return (
            <div className="friendCardNav">
            <h4>{this.props.friend.user.name}</h4>
            <button type="button" className="btn" onClick={() => this.props.deleteFriend(this.props.friend.id)}>Remove Friend</button>
            </div>
        )
    }
}

export default FriendCard;