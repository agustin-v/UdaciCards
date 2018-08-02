import { AsyncStorage } from 'react-native';
import { DECKS_STORAGE_KEY } from './api';
import { addDecks } from '../actions';

export const initialDecksData = {
  React: {
    title: 'React',
    cards: [
      {
        frontText: 'What is React?',
        backText: 'A JavaScript library for building user interfaces'
      },
      {
        frontText: 'When was React released?',
        backText: 'March 2013'
      }
    ]
  },
  Redux: {
    title: 'Redux',
    cards: [
      {
        frontText: 'What is redux?',
        backText: 'A predictable state container for JavaScript apps'
      }
    ]
  }
};

export function setInitialDecks () {
  AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
    if (!res) {
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecksData));
    }
  })
}
