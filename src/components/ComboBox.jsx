import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/ComboBox.css';

export default class ComboBox extends Component {
  render() {
    const { LABEL, data, onChange, value, name, options, filterDisabled, classTitle,
      classLabel, classselect } = this.props;

    return (
      <label htmlFor={ LABEL } className={ classLabel }>
        <h4 className={ classTitle }>{LABEL}</h4>
        <select
          disabled={ filterDisabled }
          className={ classselect }
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
  classTitle: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  classselect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};
