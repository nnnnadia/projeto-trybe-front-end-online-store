import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CategorySelector extends Component {
  render() {
    const { name, id, onChange } = this.props;
    return (
      <li>
        <label data-testid="category" htmlFor={ id }>
          <input
            type="radio"
            id={ id }
            name="category"
            value={ id }
            onChange={ onChange }
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
  onChange: PropTypes.func.isRequired,
};
