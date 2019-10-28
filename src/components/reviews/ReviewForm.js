import React, { Component } from 'react';
import ReviewManager from '../../modules/ReviewManager';
import './review.css'

class ReviewForm extends Component {
    state = {
        id: "",
        noteId: parseInt(this.props.match.params.noteId),
        userId: "",
        username: "",
        ratingTitle: "",
        rating: "",
        review: "",
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

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
                rating: this.state.rating,
                review: this.state.review,
                noteId: this.state.noteId,

            };

            // Create the animal and redirect user to animal list
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

            <label className="review">review:</label>
            <input
              type="text"
              placeholder="comments:"
              id="review"
              onChange={this.handleFieldChange}
            ></input>
            <label className="instructor">rating:</label>
            <input
              type="text"
              placeholder="instructor"
              id="instructor"
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