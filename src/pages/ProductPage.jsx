import React from 'react';
import PropTypes from 'prop-types';
import { getProductsInfo } from '../services/api';

class ProductPage extends React.Component {
  state={
    productInfo: [],
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfoApi = await getProductsInfo(id);
    this.setState({ productInfo: productInfoApi });
    console.log(this.props);
  }

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <h2>{productInfo.title}</h2>
        <img alt="Produto" src={ productInfo.thumbnail } />
        <h4>
          Preço
          { productInfo.price }
        </h4>
        <h4>
          Quantidade restante:
          { productInfo.available_quantity}
        </h4>
        <h4>
          Quantidade vendida:
          { productInfo.sold_quantity}
        </h4>
        <h4>
          Produto internacional:
          { productInfo.international_delivery_mode}
        </h4>
        <h4>
          Descrição:
          { productInfo.descriptions}
        </h4>
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductPage;
