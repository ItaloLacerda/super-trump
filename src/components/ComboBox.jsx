import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComboBox extends Component {
  render() {
    const { LABEL, data, onChange, value, name, options, filterDisabled } = this.props;

    return (
      <label htmlFor={ LABEL }>
        {LABEL}
        <select
          disabled={ filterDisabled }
          id={ LABEL }
          data-testid={ data }
          value={ value }
          onChange={ onChange }
          name={ name }
        >
          {options
            .map((option) => <option key={ option } value={ option }>{option}</option>)}
        </select>
      </label>
    );
  }
}

ComboBox.propTypes = {
  options: PropTypes.arrayOf.isRequired,
  LABEL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};
