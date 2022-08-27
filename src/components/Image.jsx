import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { data, src, alt } = this.props;

    return (
      <image data-testid={ data } src={ src } alt={ alt } />
    );
  }
}

Image.propTypes = {
  data: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
