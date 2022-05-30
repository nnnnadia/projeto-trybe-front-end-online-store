import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as UnselectedIcon } from '../assets/icons/square.svg';
import { ReactComponent as SelectedIcon } from '../assets/icons/x-square-fill.svg';
import '../css/botao-categoria.css';

export default class CategorySelector extends Component {
  render() {
    const {
      name,
      id,
      category,
      onChange,
    } = this.props;
    return (
      <li className="botao-categoria">
        <label data-testid="category" htmlFor={ id }>
          { category === id
            ? <SelectedIcon />
            : <UnselectedIcon />}
          <input
            type="radio"
            id={ id }
            name="category"
            value={ id }
            onChange={ onChange }
            hidden
          />
          { name }
        </label>
      </li>
    );
  }
}

CategorySelector.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
