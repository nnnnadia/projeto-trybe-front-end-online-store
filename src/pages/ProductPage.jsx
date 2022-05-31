import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getProductsInfo } from '../services/api';
import '../css/pagina-produto.css';

class ProductPage extends React.Component {
  state={
    product: {},
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productInfoApi = await getProductsInfo(id);
    this.setState({
      product: {
        ...productInfoApi,
        image: productInfoApi.pictures[0].secure_url,
      },
    });
  }

  render() {
    const {
      state: {
        product,
        product: {
          title,
          image,
          price,
          available_quantity: availableQuantity,
          sold_quantity: soldQuantity,
          international_delivery_mode: internationalDeliveryMode,
        }
      },
      props: {
        handleCartButton,
      }
    } = this;
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
                  handleCartButton(product);
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
  handleCartButton: PropTypes.func.isRequired,
};

export default ProductPage;
