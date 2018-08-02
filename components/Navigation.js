import React from 'react';
import { StackNavigator } from 'react-navigation';

import { headerTextColor, headerBackgroundColor } from '../utils/colors';

import Home from './Home';
import NewDeck from './NewDeck';
import Deck from './Deck';
import NewCard from './NewCard';
import Quiz from './Quiz';

const Navigation = StackNavigator(
  {
    Home: {
      screen: Home
    },
    NewDeck: {
      screen: NewDeck
    },
    Deck: {
      screen: Deck
    },
    NewCard: {
      screen: NewCard
    },
    Quiz: {
      screen: Quiz
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: headerBackgroundColor
      },
      headerTitleStyle: {
        color: headerTextColor,
        fontSize: 18
      },
      headerBackTitleStyle: {
        color: headerTextColor,
        fontSize: 16
      },
      headerTintColor: headerTextColor
    }
  }
);

export default Navigation;
