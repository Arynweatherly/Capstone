import React, { Component } from 'react';
import ReviewManager from '../../modules/ReviewManager';
import './review.css'
import 'react-rater/lib/react-rater.css'
import Rating from 'react-rating'

class ReviewForm extends Component {
    state = {
        id: "",
        noteId: parseInt(this.props.match.params.noteId),
        userId: "",
        username: "",
        ratingTitle: "",
        rating: "",
        review: "",
        loadingStatus: false,
    }
    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
  };

  handleRatingChange = event => {
      const stateToChange = {};
      stateToChange["rating"] = event;
      this.setState(stateToChange);
  }

    constructNewReview = evt => {
        evt.preventDefault();
        if (this.state.ratingTitle === "" ) {
  
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const review = {
                ratingTitle: this.state.ratingTitle,
                userId: parseInt(sessionStorage.getItem("credentials")),
                username: sessionStorage.getItem("username"),
                rating: parseInt(this.state.rating),
                review: this.state.review,
                noteId: parseInt(this.state.noteId)

            };

            // Create the review and redirect user to reviewlist
            ReviewManager.post(review)
            .then(() => this.props.history.push(`/notes/${this.props.match.params.noteId}`));
        }
    };

    render(){

        return(
            <>
            <form>
            <fieldset>
            <label className="ratingTitle">Title::</label>
            <input
              type="text"
              placeholder="Title"
              id="ratingTitle"
              onChange={this.handleFieldChange}
            ></input>

            <label className="name">Name:</label>
            <input
              type="text"
              placeholder="name"
              id="username"
              onChange={this.handleFieldChange}
            ></input>
            <label className="instructor">rating:</label>
            {/* <Rating
            name="rating"
            id="rating"
            initialRating={this.state.rating}
            emptySymbol={<span style={{ color: 'gray' }}><i className="fa fa-star fa-2x"></i></span>}
            fullSymbol={<span style={{ color: 'black' }}><i className="fa fa-star fa-2x"></i></span>}
            onClick={this.handleRatingChange} 
            /> */}

            <label className="review">review:</label>
            <input
              type="text"
              placeholder="comments:"
              id="review"
              onChange={this.handleFieldChange}
            ></input>
          </fieldset>
          <button type="button"   disabled={this.state.loadingStatus} onClick={this.constructNewReview}>
            add
          </button>
            </form>
        </>
        )
    }
}

export default ReviewForm