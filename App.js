import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';

import reducer from './reducers';
import { setLocalNotification } from './utils/notifications';

import { setInitialDecks } from './utils/initialDecks';

import Navigation from './components/Navigation';

const store = createStore(reducer);

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
    setInitialDecks()
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{height: Constants.statusBarHeight }}>
            <StatusBar translucent />
          </View>
          <Navigation />
        </View>
      </Provider>
    );
  }
}
