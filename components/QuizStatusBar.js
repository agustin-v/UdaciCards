import React from 'react';
import { StyleSheet, View } from 'react-native';

import { mainBackgroundColor } from '../utils/colors';

import QuizScore from './QuizScore';
import QuizRemaining from './QuizRemaining';

export default function QuizStatusBar () {
  return (
    <View style={styles.quizHeaderContainer}>
      <QuizScore />
      <QuizRemaining />
    </View>
  );
};

const styles = StyleSheet.create({
  quizHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    backgroundColor: mainBackgroundColor
  },
});
