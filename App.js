import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './App/Index'

import LoginScreen from './App/LoginScreen'



// import aaa from './App/DB'

// #2196f5 - bg
// #0d47a1 - bg 2
// #082e67 - bg 3

// export default App

const SimpleApp = StackNavigator(
  {
    Login: { screen: LoginScreen },
  },
  {
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}