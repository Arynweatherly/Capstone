import React, { Component } from 'react'
import ReviewCard from './ReviewCard'
import ReviewManager from '../../modules/ReviewManager'
import Rating from 'react-rating'

class ReviewList extends Component {
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

    componentDidMount() {
        //getAll from ReviewManager and hang on to that data; put it in state
        ReviewManager.getMyReviews(this.props.noteId)
        .then((reviews) => {
            this.setState({
                reviews: reviews
            })
        })
    }

    render() {
        console.log("ReviewList: Render");
        return(
            <div className="review-container-card">
                {this.state.reviews.map(review => 
                <ReviewCard 
                key={review.id}
                review={review}
                deleteReview={this.deleteReview}
                />
                )}
            </div>
        )
    }
}

export default ReviewList
