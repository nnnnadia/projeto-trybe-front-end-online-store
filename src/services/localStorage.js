const productReviewsKey = 'product_reviews';

export const loadReviews = () => {
  if (!JSON.parse(localStorage.getItem(productReviewsKey))) {
    localStorage.setItem(productReviewsKey, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(productReviewsKey));
};

export const loadProductReview = (productId) => {
  const reviews = loadReviews();
  return reviews.filter((review) => review.productId === productId);
};

export const saveReview = (newReview) => {
  const reviews = [
    ...loadReviews(),
    newReview,
  ];
  localStorage.setItem(productReviewsKey, JSON.stringify(reviews));
};
