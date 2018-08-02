import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import {
  showAnswer,
  hideAnswer,
  updateCurrentCardIndex,
  updateQuizScore,
  setQuizToComplete,
  resetQuiz
} from '../actions';

import QuizStatusBar from './QuizStatusBar';
import QuizCard from './QuizCard';
import QuizButtons from './QuizButtons';
import QuizComplete from './QuizComplete';

import { white } from '../utils/colors';

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.title}`
    };
  };

  componentDidMount () {
    this.props.dispatch(resetQuiz())
  }

  handleShowAnswer = () => {
    this.props.dispatch(showAnswer())
  }

  handleCorrect = () => {
    this.props.dispatch(updateQuizScore(this.props.score + 1))
    this.updateQuizStatus()
    this.props.dispatch(hideAnswer())
  }

  handleIncorrect = () => {
    this.updateQuizStatus()
    this.props.dispatch(hideAnswer())
  }

  updateQuizStatus = () => {
    const { deck, currentCardIndex } = this.props;

    if (currentCardIndex < deck.cards.length - 1) {
      this.props.dispatch(updateCurrentCardIndex(currentCardIndex + 1))
    } else {
      this.props.dispatch(setQuizToComplete())
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.quizComplete
          ? <QuizComplete navigation={this.props.navigation} />
          : <View style={styles.quizContainer}>
              <QuizStatusBar />
              <QuizCard />
              <QuizButtons
                handleShowAnswer={this.handleShowAnswer}
                handleCorrect={this.handleCorrect}
                handleIncorrect={this.handleIncorrect}
                updateQuizStatus={this.updateQuizStatus}
              />
            </View>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1
  },
  quizContainer: {
    justifyContent: 'space-between',
    flex: 1
  }
})

function mapStateToProps (state) {
  return {
    deck: state.decks[state.quiz.title],
    currentCardIndex: state.quiz.currentCardIndex,
    quizComplete: state.quiz.complete,
    score: state.quiz.score
  };
}

export default connect(mapStateToProps)(Quiz);
