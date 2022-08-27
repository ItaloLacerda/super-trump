import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Image from './Image';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <>
        <Text data="name-card" value={ cardName } />
        <Image data="image-card" src={ cardImage } alt={ cardName } />
        <Text data="description-card" value={ cardDescription } />
        <Text data="attr1-card" value={ cardAttr1 } />
        <Text data="attr2-card" value={ cardAttr2 } />
        <Text data="attr3-card" value={ cardAttr3 } />
        <Text data="rare-card" value={ cardRare } />
        { cardTrunfo && <Text data="trunfo-card" value="Super Trunfo" />}

      </>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
