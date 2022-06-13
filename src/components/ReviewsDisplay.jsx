import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewsDisplay extends Component {
  render() {
    const { productReviews } = this.props;
    return (
      <div>
        { productReviews.map((review, index) => (
          <div key={ index }>
            <h4>{ review.reviewerEmail }</h4>
            <span>{ review.reviewRate }</span>
            <p>{ review.reviewText }</p>
          </div>
        )) }
      </div>
    );
  }
}

ReviewsDisplay.propTypes = {
  productReviews: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.string,
    reviewerEmail: PropTypes.string,
    reviewRate: PropTypes.string,
    reviewText: PropTypes.string,
  })).isRequired,
};
