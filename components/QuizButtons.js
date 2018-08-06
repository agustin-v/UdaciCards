import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { mainTextColor, headerTextColor } from '../utils/colors';

import Button from './Button';

class QuizButtons extends Component {
  render() {
    return (
      <View>
        {this.props.showAnswer
          ? <View style={styles.answerButtonsContainer}>
              <TouchableOpacity
                onPress={this.props.handleIncorrect}
                style={[styles.button, styles.incorrectButton]}
              >
                <Text style={styles.buttonText}>
                  Incorrect
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.props.handleCorrect}
                style={[styles.button, styles.correctButton]}
              >
                <Text style={styles.buttonText}>
                  Correct
                </Text>
              </TouchableOpacity>
            </View>
          : <TouchableOpacity
              onPress={this.props.handleShowAnswer}
              text={'Show Answer'}
              style={[styles.button, styles.showAnswerButton]}
            >
              <Text style={styles.showAnswerButtonText}>
                Show Answer
              </Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  answerButtonsContainer: {
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  correctButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#1affd5'
  },
  incorrectButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#ff6978'
  },
  showAnswerButton: {
    backgroundColor: mainTextColor,
    height: 100
  },
  showAnswerButtonText: {
    color: headerTextColor,
    fontSize: 20
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: mainTextColor
  }
})

function mapStateToProps (state) {
  return {
    showAnswer: state.quiz.showAnswer
  };
}

export default connect(mapStateToProps)(QuizButtons);
