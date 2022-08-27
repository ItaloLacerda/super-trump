import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import ComboBox from './components/ComboBox';
import Form from './components/Form';
import Input from './components/Input';

import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    filterDisabled: false,
    hasTrunfo: false,
    deckOfCards: [],
    filter: [],
  };

  isButtonDisabled = () => {
    const maxsum = 210;
    const maxAttr = 90;
    const minAttr = -1;

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const inputs = [cardName, cardDescription, cardImage];
    const cardAttrs = [cardAttr1, cardAttr2, cardAttr3];

    const sumCard = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxsum;

    const emptyInput = inputs.every((input) => input !== '');

    const attributeValidation = cardAttrs.every(
      (cardAttr) => sumCard && cardAttr <= maxAttr && cardAttr > minAttr,
    );

    const disabled = emptyInput && attributeValidation;

    return disabled;
  };

  onInputChange = ({ target }) => {
    const { value, name, type, checked } = target;
    const { hasTrunfo } = this.state;
    this.setState({ [name]: value }, () => {
      if (!this.isButtonDisabled()) {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
    if (type === 'checkbox' && !hasTrunfo) {
      this.setState({ [name]: checked });
    }
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const card = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((previousState) => ({
      deckOfCards: [...previousState.deckOfCards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      filter: [...previousState.filter, card],
    }));

    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

  deleteButton = ({ target }) => {
    const { name } = target;
    const { deckOfCards } = this.state;

    if (deckOfCards[name].cardTrunfo) this.setState({ hasTrunfo: false });
    deckOfCards.splice(Number(name), 1);
    this.setState({ deckOfCards });
  };

  filtersLetter = ({ target }) => {
    const { value } = target;
    const { deckOfCards, filter } = this.state;

    this.setState({ deckOfCards: filter });
    const deckfilter = deckOfCards.filter((card) => card.cardName.includes(value));
    this.setState({ deckOfCards: deckfilter });
    if (value === '') this.setState({ deckOfCards: filter });
  };

  filterRarity = ({ target }) => {
    const { value } = target;
    const { deckOfCards, filter } = this.state;

    const rarity = deckOfCards.filter((card) => card.cardRare === value);
    this.setState({ deckOfCards: rarity });
    if (value === 'todas') this.setState({ deckOfCards: filter });
  };

  trunfoFilte = ({ target }) => {
    const { checked } = target;
    const { filter } = this.state;

    const trunfo = filter.filter((card) => card.cardTrunfo);
    if (checked) {
      this.setState({
        deckOfCards: trunfo,
        filterDisabled: true,
      });
    }
    if (!checked) {
      this.setState({
        deckOfCards: filter,
        filterDisabled: false,
      });
    }
  };

  render() {
    const { deckOfCards, filterDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="letter-generator">
          <section className="letter-forms">
            <h2 className="caption">Adiciona Nova Carta</h2>
            <div className="container-forms-style">
              <Form
                onInputChange={ this.onInputChange }
                onSaveButtonClick={ this.onSaveButtonClick }
                { ...this.state }
              />
            </div>
          </section>
          <section className="letter-preview">
            <Card
              { ...this.state }
            />
          </section>
        </section>
        <section>
          <Input
            type="text"
            data="name-filter"
            filterDisabled={ filterDisabled }
            onChange={ this.filtersLetter }
          />
          <ComboBox
            filterDisabled={ filterDisabled }
            data="rare-filter"
            options={ ['todas', 'normal', 'raro', 'muito raro'] }
            onChange={ this.filterRarity }
          />
          <Input
            type="checkbox"
            LABEL="Super Trunfo"
            data="trunfo-filter"
            onChange={ this.trunfoFilte }
          />
          {deckOfCards.map((element, index) => (
            <>
              <Card
                key={ element.cardName }
                cardName={ element.cardName }
                cardImage={ element.cardImage }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <Button
                value="Excluir"
                data="delete-button"
                onClick={ this.deleteButton }
                index={ index }
              />
            </>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
