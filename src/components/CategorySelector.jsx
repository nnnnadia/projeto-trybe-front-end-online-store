import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorySelector extends Component {
  render() {
    const { name, id } = this.props;
    return (
      <li>
        <label data-testid="category" htmlFor={ id }>
          <input
            type="radio"
            id={ id }
            name="category"
            value={ id }
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
};
