import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './App/Index'

import LoginScreen from './App/LoginScreen'
import HowGetCodeScreen from './App/HowGetCodeScreen'

// import aaa from './App/DB'



// export default App


class Aaa extends React.Component {
  
      render() {
          return(
              <View>
                  <Button
                  onPress={() => this.props.navigation.navigate('HowGetCode')}
                  title='sdf'
                  />
              </View>
          )
      }
  
  }

const SimpleApp = StackNavigator(
  {
    // Sdf: { screen: Aaa},
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