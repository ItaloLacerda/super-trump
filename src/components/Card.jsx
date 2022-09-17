import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import Image from './Image';

import '../style/Card.css';

export default class Card extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <div className="background-cart">
        <div className="container-name">
          <Text className="name-card" data="name-card" value={ cardName } />
        </div>
        <div className="container-image">
          { cardTrunfo && <Text data="trunfo-card" value="Super Trunfo" />}
          <Image
            className="image-card"
            data="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
        <div className="conteiner-description-card">
          <Text
            className="description-card"
            data="description-card"
            value={ cardDescription }
          />
        </div>
        <div className="container-attr">
          <div className="attr1-card">
            <Text
              className="attr1"
              data="attr1-card"
              value="Attr01................................."
            />
            <Text className="attr1-value" data="attr1-card" value={ cardAttr1 } />
          </div>
          <div className="attr2-card">
            <Text
              className="attr2"
              data="attr2-card"
              value="Attr02................................."
            />
            <Text className="attr2-value" data="attr2-card" value={ cardAttr2 } />
          </div>
          <div className="attr3-card">
            <Text
              className="attr3"
              data="attr3-card"
              value="Attr03................................."
            />
            <Text className="attr3-value" data="attr3-card" value={ cardAttr3 } />
          </div>
          <div className="rare-card">
            <Text className="rare-value" data="rare-card" value={ cardRare } />
          </div>
        </div>
      </div>

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
