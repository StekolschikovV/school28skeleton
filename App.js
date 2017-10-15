import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './App/LoginScreen'
import HowGetCodeScreen from './App/HowGetCodeScreen'

const SimpleApp = StackNavigator(
  {
    Login: { screen: LoginScreen },
    HowGetCode: { screen: HowGetCodeScreen },
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