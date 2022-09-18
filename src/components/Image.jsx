import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../style/Image.css';

export default class Image extends Component {
  render() {
    const { data, src, alt, className } = this.props;

    return (
      <img className={ className } data-testid={ data } src={ src } alt={ alt } />
    );
  }
}

Image.propTypes = {
  className: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
