// import React, { Component } from 'react';
// import ReviewManager from '../../modules/ReviewManager';
// import './review.css'
// import Rating from 'react-rating'

// class ReviewDetails extends Component {

//   state = {
//       reviews: [],
//       id: "",
//       users: [],
//       userId: "",
//       username: "",
//       noteId: "",
//       ratingTitle: "",
//       review: "",
//       rating: 0,
//       loadingStatus: false
//   }

//   componentDidMount(){
//     console.log("ReviewDetails: ComponentDidMount");
//     //get(id) from ReviewManager and hang on to the data; put it into state
//     ReviewManager.get(this.props.noteId)
//     .then((review) => {
//       this.setState({
//         id: review.id,
//         userId: parseInt(sessionStorage.getItem("credentials")),
//         username: review.username,
//         noteId: parseInt(this.props.noteId),
//         ratingTitle: review.ratingTitle,
//         review: review.review,
//         rating: review.rating,
//         loadingStatus: false
//       });
//     });
//   }

//   deleteReview = id => {
//       ReviewManager.delete(id)
//       .then(() => {this.props.history.push(`notes/${this.state.noteId}`)})
//   }

//   render() {
//     const activeUser = parseInt(sessionStorage.getItem("credentials"))
//     const checkUser = this.props.review.userId === activeUser
//     return(
//       <div className="card">
//         <div className="card-content">
//           {/* <picture>
//             <img src={require('./dog.svg')} alt="My Dog" />
//           </picture> */}
//         <Rating
//         readonly
//         name="rating"
//         initialRating={this.props.review.rating}
//         emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
//         fullSymbol={<img src="assets/images/star-black.png" className="icon" />}
//                 />
//             <h3> <span style={{ color: 'darkslategrey' }}>{this.state.ratingTitle}</span></h3>
//             <p>username: <br />{this.state.username}</p>
//             <p>review: <br />{this.state.review}</p>
//             <p>rating: <br /> {this.state.rating}</p>
//             <Rating />
//             <button type ="button" onClick={() => this.deteleReview(this.state.id)}>Delete</button>
//             <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
//             {/* <button type="button" onClick={() => {this.props.history.push(``)}} */}
//         </div>
//       </div>
//     );
//   }
// }

// export default ReviewDetails;