import React from 'react';
import PropTypes from 'prop-types';
import { getProductsInfo } from '../services/api';

class ShoppingCartItem extends React.Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
  }

  async componentDidMount() {
    const { idProduct } = this.props;
    const productInfo = await getProductsInfo(idProduct);
    const {
      title,
      thumbnail,
      price,
    } = productInfo;
    this.setState({
      title,
      thumbnail,
      price,
    });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    return (
      <div>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  idProduct: PropTypes.string.isRequired,
};

export default ShoppingCartItem;
