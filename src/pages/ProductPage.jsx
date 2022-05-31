import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getProductsInfo } from '../services/api';
import '../css/pagina-produto.css';

class ProductPage extends React.Component {
  state={
    title: '',
    image: '',
    price: 0,
    availableQuantity: 0,
    soldQuantity: 0,
    internationalDeliveryMode: '',
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfoApi = await getProductsInfo(id);
    const {
      title,
      pictures,
      price,
      available_quantity: availableQuantity,
      sold_quantity: soldQuantity,
      international_delivery_mode: internationalDeliveryMode,
    } = productInfoApi;
    this.setState({
      title,
      image: pictures[0].secure_url,
      price,
      availableQuantity,
      soldQuantity,
      internationalDeliveryMode,
    });
  }

  render() {
    const {
      title,
      image,
      price,
      availableQuantity,
      soldQuantity,
      internationalDeliveryMode,
    } = this.state;

    const { match: { params: { id } } } = this.props;
    const { buttonclick } = this.props;

    return (
      <div>
        <Header />
        <main className="container-column caixa-produto">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <div className="container-row detalhes-produto">
            <img alt="Produto" src={ image } />
            <aside>
              <h4>
                Preço
                { price }
              </h4>
              <h4>
                Quantidade restante:
                { availableQuantity }
              </h4>
              <h4>
                Quantidade vendida:
                { soldQuantity }
              </h4>
              <h4>
                Produto internacional:
                { internationalDeliveryMode }
              </h4>
              <button
                className="botao-produto"
                type="button"
                onClick={ () => {
                  buttonclick(id);
                } }
                data-testid="product-detail-add-to-cart"
              >
                Adicionar ao carrinho
              </button>
            </aside>
          </div>
        </main>
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
  buttonclick: PropTypes.func.isRequired,
};

export default ProductPage;
