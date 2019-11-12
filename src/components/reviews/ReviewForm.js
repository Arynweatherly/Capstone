import React, { Component } from 'react';
import ReviewManager from '../../modules/ReviewManager';
import './review.css'
import 'react-rater/lib/react-rater.css'
import Rating from 'react-rating'
import AuthManager from '../../modules/AuthManager'
import { parse } from '@babel/core';

class ReviewForm extends Component {
    state = {
        id: "",
        noteId: '',
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



componentDidMount() {
  AuthManager.getUserById(this.props.activeUser).then(user => {
    this.setState({
      userId: this.props.activeUser,
      username: user.username,
      noteId: this.props.match.params.noteId
    })
  })

}





    constructNewReview = evt => {
        evt.preventDefault();
        if (this.state.ratingTitle === "" ) {

            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const review = {
                ratingTitle: this.state.ratingTitle,
                userId: parseInt(sessionStorage.getItem("activeUser")),
                username: this.state.username,
                rating: parseInt(this.state.rating),
                review: this.state.review,
                noteId: parseInt(this.props.match.params.noteId)

            };

            // Create the review and redirect user to reviewlist
            console.log('new review', review)
            ReviewManager.post(review)
            .then(() => this.props.history.push(`/notes/${this.props.match.params.noteId}`));
        }
    };

    render(){
      console.log(this.props, "noteId from match")
     // console.log(this.props.note)
        return(
            <>
             <div className="box container review">
             <section className="is-left">
             <p className="title is-4">Add Review:</p>
             </section>
            <form>
        
            <div className="field">
            <label className="label"></label>
            <div className="control">
            <input
            className="input"
              type="text"
              placeholder="Title"
              id="ratingTitle"
              required=""
              autoFocus=""
              onChange={this.handleFieldChange}
            ></input>
            </div>
            </div>
          
            <div className="field is-right">
            <label className="label"></label>
            <div className="control">
            <input
            className="input"
              type="text"
              required=""
              autoFocus=""
              placeholder="name"
              id="username"
              onChange={this.handleFieldChange}
            ></input>
            </div>
            </div>
    
            <br />
            <div className="field is-right">
            <label className="label">rate from 1-5 (1- bad, 5-great):</label>
            <div className="control">
            <input
            className="input"
            type="text"
            required=""
            autoFocus=""
            placeholder="rating"
            id="rating"
            onChange={this.handleFieldChange} />
            </div>
            </div>

            <div className="field is-right">
            <label className="label"></label>
            <div className="control">
            <textarea
            className="textarea"
              type="text"
              placeholder="comments:"
              required=""
              autoFocus=""
              id="review"
              onChange={this.handleFieldChange}
            ></textarea>
            </div>
            </div>
        
          <button type="button"   disabled={this.state.loadingStatus} onClick={this.constructNewReview}>
            add
          </button>
            </form>
            </div>
        </>
        )
    }
}

export default ReviewForm

