import React, { Component } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class QuizCardBack extends Component {
  state = {
    fadeAnimation: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnimation,
      {
        toValue: 1,
        duration: 200,
      }
    ).start();
  }

  render() {
    let { fadeAnimation } = this.state;
    const { deck, currentCardIndex } = this.props;
    const { backText } = deck.cards[currentCardIndex];

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnimation,
        }}
      >
        <Text style={styles.cardText}>
          {backText}
        </Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  cardText: {
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    alignSelf: 'center'
  }
});

function mapStateToProps (state) {
  return {
    deck: state.decks[state.quiz.title],
    currentCardIndex: state.quiz.currentCardIndex
  };
}

export default connect(mapStateToProps)(QuizCardBack);
