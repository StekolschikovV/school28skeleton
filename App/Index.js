import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// #2196f5 - bg
// #0d47a1 - bg 2
// #082e67 - bg 3

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    componentDidMount() {
        // alert(2)
      }
    render() {
        return (
            <View>
                <Text>2</Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Home2')}
                    title="Go to notifications"
                />
            </View>
        );
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

