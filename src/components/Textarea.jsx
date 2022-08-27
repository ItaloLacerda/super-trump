import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Textarea.css';

export default class Textarea extends Component {
  render() {
    const { LABEL, type, data, value, onChange, name,
      classTextArea, classLabel, classTitle } = this.props;

    return (

      <label htmlFor={ LABEL } className={ classLabel }>
        <h4 className={ classTitle }>{LABEL}</h4>
        <textarea
          rows="4"
          className={ classTextArea }
          type={ type }
          id={ LABEL }
          name={ name }
          data-testid={ data }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  LABEL: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  classTitle: PropTypes.string.isRequired,
  classTextArea: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
