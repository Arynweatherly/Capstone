
import React, { Component } from 'react';
import './review.css'
import { Link } from "react-router-dom";
import 'react-rater/lib/react-rater.css'
import Rater from "react-rater";
import ReviewManager from '../../modules/ReviewManager'
// import StarRating from 'react-star-rating'

class ReviewCard extends Component {
    state = {
        reviews: [],
    }

    deleteReview = id => {
        ReviewManager.delete(id)
        .then(() => {
          ReviewManager.getAll()
          .then((newReviews) => {
            this.setState({
                reviews: newReviews
            })
          })
        })
      }

    onRate = (rating, e) => {
        this.setState({
            lastRating: rating,
            isRating: false,

        });
        const { onRate: callback } = this.props;
        callback && callback({ ...e, rating });
    }

    render() {
        return (
            <div className="box review reviewForm">
                <div className="content">
                <p> <u>username:</u> {this.props.review.username}</p>
                <p>{this.props.review.ratingTitle}</p>
                <p className="rating">
                        <Rater
                            total={5}
                            rating={this.props.review.rating}
                            onRate={this.state.rating}
                            onRating={this.state.rating}
                        />
                    </p>
                <p>{this.props.review.review} </p>
                <hr />
                <button type="button" onClick={() => this.props.deleteReview(this.props.review.id)}>Delete</button>

                </div>
            </div>
        )
    }
}
export default ReviewCard;
