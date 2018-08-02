import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';

import { headerTextColor, mainBackgroundColor } from '../utils/colors';

import DeckList from './DeckList';

const addDeckButton = (navigation) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('NewDeck') }}>
      <Foundation
        name='plus'
        size={28}
        color={headerTextColor}
        style={{marginRight: 10}}
      />
    </TouchableOpacity>
  );
}

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Decks',
      headerRight: addDeckButton(navigation)
    };
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: mainBackgroundColor}}>
        <DeckList navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default Home;
