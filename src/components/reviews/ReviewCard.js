import React, { Component } from 'react';
import './review.css'
import { Link } from "react-router-dom";
import Rating from 'react-rating'
import 'react-rater/lib/react-rater.css'

class ReviewCard extends Component {
    render() {
        return (
            <div className="review-card-container">
                <div className="review-card-content">
                <p>{this.props.review.username}</p>
                <p>Title:{this.props.review.ratingTitle}</p>
                <Rating
                    readonly
                    name="rating"
                    initialRating={this.props.review.rating}
                    emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
                    fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                    />
                <p>Comments:{this.props.review.review} </p>
                <button type="button" onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button>
                <Link to={`/reviews/${this.props.review.id}`}><button>details</button></Link>
                </div>
            </div>
        )
    }
}
export default ReviewCard;