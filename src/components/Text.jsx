import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Text.css';

export default class Text extends Component {
  render() {
    const { data, value, className } = this.props;

    return (
      <p className={ className } data-testid={ data }>{ value }</p>
    );
  }
}

Text.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
