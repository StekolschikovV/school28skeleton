import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import LoginScreen from './App/LoginScreen'
import HowGetCodeScreen from './App/HowGetCodeScreen'
import LoadDataScreen from './App/LoadDataScreen'
import MenuScreen from './App/MenuScreen'
import TimetableScreen from './App/TimetableScreen'
import TeachersScreen from './App/TeachersScreen'
import ClassmatesScreen from './App/ClassmatesScreen'

const Scholl28 = StackNavigator(
  {
    Login: { screen: LoginScreen },
    HowGetCode: { screen: HowGetCodeScreen },
    LoadData: { screen: LoadDataScreen },
    Menu: { screen: MenuScreen },
    Timetable: { screen: TimetableScreen},
    Teachers: { screen: TeachersScreen},
    Classmates: { screen: ClassmatesScreen},
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

// TODO: Fix title topBar