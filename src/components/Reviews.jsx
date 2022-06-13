import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewForm from './ReviewForm';
import { saveReview, loadProductReview } from '../services/localStorage';
import ReviewsDisplay from './ReviewsDisplay';

export default class Reviews extends Component {
  state = {
    reviewInfo: {
      reviewerEmail: '',
      reviewText: '',
      reviewRate: '',
    },
    productReviews: [],
  };

  componentDidMount() {
    this.loadReviews();
  }

  loadReviews = () => {
    const { productId } = this.props;
    const productReviews = loadProductReview(productId);
    this.setState({ productReviews });
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState(({ reviewInfo }) => (
      { reviewInfo: {
        ...reviewInfo,
        [name]: value,
      } }));
  }

  handleReviewButton = () => {
    const {
      state: { reviewInfo },
      props: { productId },
      loadReviews,
    } = this;
    saveReview({ ...reviewInfo, productId });
    this.setState({ reviewInfo: {
      reviewerEmail: '',
      reviewText: '',
      reviewRate: '',
    } });
    loadReviews();
  }

  render() {
    const {
      state: { reviewInfo, productReviews },
      handleInputChange,
      handleReviewButton,
    } = this;
    return (
      <div>
        <ReviewForm
          reviewInfo={ reviewInfo }
          handleInputChange={ handleInputChange }
          handleReviewButton={ handleReviewButton }
        />
        <ReviewsDisplay
          productReviews={ productReviews }
        />
      </div>
    );
  }
}

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
};
