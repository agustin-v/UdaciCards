import { initialDecksData } from '../utils/initialDecks';
import { combineReducers } from 'redux';
import {
  ADD_DECKS,
  ADD_DECK,
  ADD_CARD,
  SET_QUIZ_DECK_TITLE,
  SHOW_ANSWER,
  HIDE_ANSWER,
  UPDATE_CURRENT_CARD_INDEX,
  UPDATE_QUIZ_SCORE,
  SET_QUIZ_TO_COMPLETE,
  RESET_QUIZ
} from '../actions/types';

function decks (state = initialDecksData, action) {
  switch (action.type) {
    case ADD_DECKS :
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK :
      return {
        ...state,
        ...action.deck
      };
    case ADD_CARD :
      return {
        ...state,
        [action.deckTitle]: {
          title: action.deckTitle,
          cards: [...state[action.deckTitle].cards, action.card]
        }
      };
    default:
      return state;
  }
}

const initialQuizState = {
  currentCardIndex: 0,
  score: 0,
  showAnswer: false,
  complete: false
};

function quiz (state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_DECK_TITLE :
      return {
        ...state,
        title: action.title
      }
    case SHOW_ANSWER :
      return {
        ...state,
        showAnswer: true
      }
    case HIDE_ANSWER :
      return {
        ...state,
        showAnswer: false
      }
    case UPDATE_CURRENT_CARD_INDEX :
      return {
        ...state,
        currentCardIndex: action.cardIndex
      }
    case UPDATE_QUIZ_SCORE :
      return {
        ...state,
        score: action.score
      }
    case SET_QUIZ_TO_COMPLETE :
      return {
        ...state,
        complete: true
      }
    case RESET_QUIZ :
      return {
        ...state,
        ...initialQuizState
      }
    default:
      return state;
  }
}

export default combineReducers({
  decks,
  quiz,
});
