import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Button.css';

export default class Button extends Component {
  render() {
    const { data, onClick, disabled, value, index, classButton } = this.props;
    return (
      <button
        className={ classButton }
        type="button"
        data-testid={ data }
        disabled={ disabled }
        onClick={ onClick }
        name={ index }
      >
        { value }
      </button>
    );
  }
}

Button.propTypes = {
  index: PropTypes.number.isRequired,
  classButton: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
