import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'UdaciCards:Decks';

export function getDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((res) => {
      return JSON.parse(res);
    });
}

export function createDeck (title) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      cards: []
    }
  }));
}

export function createCard (deckTitle, card) {
  AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    const decks = JSON.parse(result);

    decks[deckTitle].cards.push(card)

    const cards = decks[deckTitle].cards;

    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        cards: cards
      }
    }))
  })
}
