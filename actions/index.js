import {
  ADD_DECKS,
  ADD_DECK,
  ADD_CARD,
  SET_QUIZ_DECK_TITLE,
  SHOW_ANSWER,
  HIDE_ANSWER,
  UPDATE_QUIZ_SCORE,
  UPDATE_CURRENT_CARD_INDEX,
  SET_QUIZ_TO_COMPLETE,
  RESET_QUIZ,
} from './types';

export function addDecks (decks) {
  return {
    type: ADD_DECKS,
    decks
  }
}

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck
  }
}

export function addCard (deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card
  }
}

export function setQuizDeckTitle (title) {
  return {
    type: SET_QUIZ_DECK_TITLE,
    title
  }
}

export function showAnswer () {
  return {
    type: SHOW_ANSWER
  }
}

export function hideAnswer () {
  return {
    type: HIDE_ANSWER
  }
}

export function updateCurrentCardIndex (cardIndex) {
  return {
    type: UPDATE_CURRENT_CARD_INDEX,
    cardIndex
  }
}

export function updateQuizScore (score) {
  return {
    type: UPDATE_QUIZ_SCORE,
    score
  }
}

export function setQuizToComplete () {
  return {
    type: SET_QUIZ_TO_COMPLETE
  }
}


export function resetQuiz () {
  return {
    type: RESET_QUIZ
  }
}
