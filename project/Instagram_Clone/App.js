/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './components/mainscreen.js';

 class App extends Component {
 
  render() {
    return (
      <MainScreen/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main : {
      screen : MainScreen,
      navigationOptions: () => ({
      //title:'Instagram',
      }),
  },
})

export default createAppContainer(AppStackNavigator);

