import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Text extends Component {
  render() {
    const { data, value } = this.props;

    return (
      <p data-testid={ data }>{ value }</p>
    );
  }
}

Text.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
