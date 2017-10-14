import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './App/Index'

// #2196f5 - bg
// #0d47a1 - bg 2
// #082e67 - bg 3

// export default App


class HomeScreen2 extends React.Component {
  static navigationOptions = {
    title: '2'
  };
  componentDidMount() {
    // alert(1)
  }
  render() {
    return (
      <View>
        <Text>1</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Go to notifications"
        />
      </View>
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Home2: { screen: HomeScreen2 }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

