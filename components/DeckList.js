import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { addDecks } from '../actions';

import { listItemColorA, listItemColorB, listItemColorC } from '../utils/colors';

import DeckListItem from './DeckListItem';

class DeckList extends Component {
  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.dispatch(addDecks(decks))
      })
  }

  render() {
    const deckItemColors = [listItemColorA, listItemColorB, listItemColorC];
    
    return (
      <ScrollView>
        {this.props.decks.map((deck, i) => (
          <DeckListItem
            title={deck.title}
            amountOfCards={deck.cards.length}
            key={deck.title}
            navigation={this.props.navigation}
            backgroundColor={deckItemColors[i % 3]}
          />
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps (state) {
  const deckKeys = Object.keys(state.decks);
  const decks = deckKeys.map(key => state.decks[key]);
  return {
    decks: decks
  };
}

export default connect(mapStateToProps)(DeckList);
