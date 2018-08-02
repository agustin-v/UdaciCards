import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { resetQuiz } from '../actions';
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications';

import Button from './Button';

class QuizComplete extends Component {
  componentDidMount () {
    clearLocalNotification()
      .then(setLocalNotification)
  }
  handleReset = () => {
    this.props.dispatch(resetQuiz())
  }
  handlebackToDeck = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.quizCompleteContainer}>
        <View>
          <Text style={styles.quizCompleteTitle}>
            Quiz Complete!
          </Text>
          <Text style={styles.quizCompleteBody}>
            {`You scored ${this.props.score} out of ${this.props.cardQuantity}`}
          </Text>
        </View>
        <View>
          <Button
            onPress={this.handleReset}
            text={'Restart Quiz'}
          />
          <Button
            onPress={this.handlebackToDeck}
            text={'Back to Deck'}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  quizCompleteContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around'
  },
  quizCompleteTitle: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20
  },
  quizCompleteBody: {
    fontSize: 22,
    textAlign: 'center'
  }
});

function mapStateToProps (state) {
  return {
    score: state.quiz.score,
    cardQuantity: state.decks[state.quiz.title].cards.length
  };
}

export default connect(mapStateToProps)(QuizComplete);
