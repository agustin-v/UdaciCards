import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { setQuizDeckTitle } from '../actions';
import { cardsToString } from '../utils/helpers';

import { mainBackgroundColor } from '../utils/colors';

import Button from './Button';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    };
  }

  handleNewDeck = () => {
    const { navigation, deck } = this.props;
    navigation.navigate('NewCard', {title: deck.title})
  }

  handleQuizStart = () => {
    const { navigation, deck } = this.props;

    if (this.deckHasCards()) {
      this.props.dispatch(setQuizDeckTitle(deck.title))
      navigation.navigate('Quiz', {title: deck.title})
    } else {
      navigation.navigate('NewCard', {title: deck.title})
    }
  }

  deckHasCards = () => {
    return this.props.deck.cards.length > 0;
  }

  render() {
    const { deck } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.bodyText}>
          {`This deck has ${cardsToString(deck.cards.length)}`}
        </Text>
        <Button
          onPress={this.handleNewDeck}
          text={'Create New Question'}
        />
        {deck.cards.length === 0
          ? <Text style={styles.bodyText}>Add some cards to enable a quiz!</Text>
          : <Button
              onPress={this.handleQuizStart}
              text={'Start a Quiz'}
            />
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: mainBackgroundColor
  },
  bodyText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 20
  }
});

function mapStateToProps (state, { navigation }) {
  const title = navigation.state.params.title;

  return {
    deck: state.decks[title]
  }
}

export default connect(mapStateToProps)(Deck);
