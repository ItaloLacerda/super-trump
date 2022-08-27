import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Textarea extends Component {
  render() {
    const { LABEL, type, data, value, onChange, name } = this.props;

    return (
      <label htmlFor={ LABEL }>
        {LABEL}
        <textarea
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
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
