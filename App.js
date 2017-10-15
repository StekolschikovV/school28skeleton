import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './App/LoginScreen'
import HowGetCodeScreen from './App/HowGetCodeScreen'
import LoadDataScreen from './App/LoadDataScreen'
import MenuScreen from './App/MenuScreen'
import TimetableScreen from './App/TimetableScreen'

const Scholl28 = StackNavigator(
  {
    // Login: { screen: LoginScreen },
    // HowGetCode: { screen: HowGetCodeScreen },
    // LoadData: { screen: LoadDataScreen },
    // Menu: { screen: MenuScreen },
    Timetable: { screen: TimetableScreen}
  },
  {
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <Scholl28 />;
  }
}
