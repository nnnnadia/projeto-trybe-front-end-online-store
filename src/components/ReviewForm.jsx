import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReviewForm extends Component {
  render() {
    const {
      reviewInfo: {
        reviewerEmail,
        reviewText,
        reviewRate,
      },
      handleInputChange,
      handleReviewButton,
    } = this.props;
    return (
      <form className="caixa-reviews">
        <input
          type="email"
          name="reviewerEmail"
          value={ reviewerEmail }
          onChange={ handleInputChange }
          data-testid="product-detail-email"
        />
        <input
          type="radio"
          name="reviewRate"
          value={ 1 }
          checked={ reviewRate === '1' }
          onChange={ handleInputChange }
          data-testid="1-rating"
        />
        <input
          type="radio"
          name="reviewRate"
          value={ 2 }
          checked={ reviewRate === '2' }
          onChange={ handleInputChange }
          data-testid="2-rating"
        />
        <input
          type="radio"
          name="reviewRate"
          value={ 3 }
          checked={ reviewRate === '3' }
          onChange={ handleInputChange }
          data-testid="3-rating"
        />
        <input
          type="radio"
          name="reviewRate"
          value={ 4 }
          checked={ reviewRate === '4' }
          onChange={ handleInputChange }
          data-testid="4-rating"
        />
        <input
          type="radio"
          name="reviewRate"
          value={ 5 }
          checked={ reviewRate === '5' }
          onChange={ handleInputChange }
          data-testid="5-rating"
        />
        <textarea
          name="reviewText"
          value={ reviewText }
          onChange={ handleInputChange }
          data-testid="product-detail-evaluation"
        />
        <button
          type="button"
          onClick={ handleReviewButton }
          data-testid="submit-review-btn"
        >
          Avaliar
        </button>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  reviewInfo: PropTypes.shape({
    reviewerEmail: PropTypes.string,
    reviewText: PropTypes.string,
    reviewRate: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleReviewButton: PropTypes.func.isRequired,
};
