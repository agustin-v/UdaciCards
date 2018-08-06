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
  return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    const decks = JSON.parse(result);
    const cards = decks[deckTitle].cards.concat([card])

    return new Promise((resolve, reject) => {
      AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckTitle]: {
          title: deckTitle,
          cards: cards
        }
      }), (err)=> {
        if(err) {
          reject(err)
        }
        AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
          resolve(JSON.parse(result))
        })
      })
    })
  })
}