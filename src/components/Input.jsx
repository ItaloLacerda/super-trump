import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Input.css';

export default class Input extends Component {
  render() {
    const { LABEL, type, data, value,
      onChange, checked, name, filterDisabled,
      classLabel, classTitle, classImput } = this.props;

    return (
      <label htmlFor={ LABEL } className={ classLabel }>
        <h3 className={ classTitle }>{LABEL}</h3>
        <input
          className={ classImput }
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
  classTitle: PropTypes.string.isRequired,
  classImput: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  filterDisabled: PropTypes.bool.isRequired,
};
