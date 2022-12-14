import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Input.css';

export default class Input extends Component {
  render() {
    const { LABEL, type, data, value,
      onChange, checked, name, filterDisabled,
      classLabel, classTitle, classImput, icon } = this.props;

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
        {
          icon && (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.993 0C3.129 0 0 3.136 0 7C0 10.864 3.129 14 6.993 14C10.864
            14 14 10.864 14 7C14 3.136 10.864 0 6.993 0ZM7.7
            3.49991H6.3V7.69991H7.7V3.49991ZM7.7 9.10009H6.3V10.5001H7.7V9.10009ZM1.39998
            6.99991C1.39998 10.0939 3.90598 12.5999 6.99998 12.5999C10.094 12.5999 12.6
            10.0939 12.6 6.99991C12.6 3.90591 10.094 1.39991 6.99998 1.39991C3.90598
            1.39991 1.39998 3.90591 1.39998 6.99991Z"
                fill="#B01726"
              />
            </svg>
          )
        }
      </label>
    );
  }
}

Input.propTypes = {
  icon: PropTypes.bool.isRequired,
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
