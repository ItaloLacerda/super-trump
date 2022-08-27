import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { LABEL, type, data, value,
      onChange, checked, name, filterDisabled } = this.props;

    return (
      <label htmlFor={ LABEL }>
        {LABEL}
        <input
          type={ type }
          id={ LABEL }
          name={ name }
          data-testid={ data }
          value={ value }
          disabled={ filterDisabled }
          onChange={ onChange }
          checked={ checked }
        />
      </label>
    );
  }
}

Input.propTypes = {
  LABEL: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};
