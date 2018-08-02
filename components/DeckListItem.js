import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { getDecks } from '../utils/api';
import { cardsToString } from '../utils/helpers';

import { mainTextColor } from '../utils/colors';

class DeckListItem extends Component {
  render () {
    return (
      <TouchableOpacity
        key={this.props.title}
        style={[styles.listItem, { backgroundColor: this.props.backgroundColor }]}
        onPress={() => {
          this.props.navigation.navigate('Deck', { title: this.props.title })
        }}
      >
        <View>
          <Text style={styles.deckTitle}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.cardAmountContainer}>
          <Text style={styles.amountOfCards}>
            {this.props.amountOfCards}
          </Text>
          <MaterialCommunityIcons
            name='cards'
            size={20}
            style={{marginRight: 10}}
            color={mainTextColor}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 25,
    paddingBottom: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deckTitle: {
    paddingLeft: 20,
    color: mainTextColor,
    fontSize: 18
  },
  cardAmountContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5
  },
  amountOfCards: {
    paddingRight: 5,
    color: mainTextColor,
    fontSize: 20
  }
});

export default DeckListItem;
