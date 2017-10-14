import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: ''
        }
    }

    componentDidMount() { 
        AsyncStorage.getItem('language')
            .then(res => {
                if (res == null) {
                    AsyncStorage.setItem('language', 'RU')
                    this.setState({
                        language: 'RU'
                    })
                } else {
                    this.setState({
                        language: res
                    })
                }
            })
    }

    render() {
        return (
            <View style={styles.root}>
                <Image
                    source={require('../img/log-bg.jpg')}
                    style={styles.container}>
                    <View style={styles.top}>
                        <Text
                            style={this.state.language == 'RU' ? styles.topElSelect : styles.topEl}
                            onPress={() => {
                                this.setState({
                                    language: 'RU'
                                })
                                AsyncStorage.setItem('language', 'RU')
                            }}
                        >
                            RU</Text>
                        <Text style={styles.topEl}> | </Text>
                        <Text
                            style={this.state.language == 'UA' ? styles.topElSelect : styles.topEl}
                            onPress={() => {
                                this.setState({
                                    language: 'UA'
                                })
                                AsyncStorage.setItem('language', 'UA')
                            }}
                        >
                            UA</Text>
                        <Text style={styles.topEl}> | </Text>
                        <Text
                            style={this.state.language == 'EN' ? styles.topElSelect : styles.topEl}
                            onPress={() => {
                                this.setState({
                                    language: 'EN'
                                })
                                AsyncStorage.setItem('language', 'EN')
                            }}
                        >
                            EN</Text>
                    </View>
                </Image>
            </View>
        );
    }

}



const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#2196f5',
    },
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        marginTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    top: {
        position: 'absolute',
        top: 5,
        flexDirection: 'row'
    },
    topEl: {
        color: 'white',
        fontSize: 12
    },
    topElSelect: {
        color: 'white',
        fontSize: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    }
});