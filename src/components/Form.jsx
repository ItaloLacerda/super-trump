import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Textarea from './Textarea';
import ComboBox from './ComboBox';
import Button from './Button';

export default class Form extends Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;

    const options = ['normal', 'raro', 'muito raro'];
    return (
      <>
        {/* classLabel, classTitle, classImput */}
        <Input
          classTitle="card-name-title"
          classLabel="card-name-label"
          classImput="card-name-input"
          type="text"
          data="name-input"
          value={ cardName }
          name="cardName"
          onChange={ onInputChange }
          LABEL="Nome"
        />
        <Textarea
          classTitle="cardDescription-title"
          classLabel="cardDescription-label"
          classTextArea="cardDescription-textArea"
          type="text"
          data="description-input"
          LABEL="Descrição"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <Input
          classTitle="cardAttr1-title"
          classLabel="cardAttr1-label"
          classImput="cardAttr1-input"
          type="number"
          data="attr1-input"
          LABEL="Attr01"
          name="cardAttr1"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          classTitle="cardAttr2-title"
          classLabel="cardAttr2-label"
          classImput="cardAttr2-input"
          type="number"
          data="attr2-input"
          LABEL="Attr02"
          name="cardAttr2"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          classTitle="cardAttr3-title"
          classLabel="cardAttr3-label"
          classImput="cardAttr3-input"
          type="number"
          data="attr3-input"
          LABEL="Attr03"
          name="cardAttr3"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <Input
          type="text"
          data="image-input"
          LABEL="Imagem"
          name="cardImage"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <ComboBox
          id="Raridade"
          data="rare-input"
          name="cardRare"
          options={ options }
          value={ cardRare }
          onChange={ onInputChange }
        />
        {hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <Input
          type="checkbox"
          data="trunfo-input"
          LABEL="Super Trybe Trunfo"
          name="cardTrunfo"
          hasTrunfo={ hasTrunfo }
          checked={ cardTrunfo }
          onChange={ onInputChange }
          onClick={ onSaveButtonClick }
        /> }
        <Button
          data="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          value="Salvar"
        />
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
