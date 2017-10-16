import React from 'react'
import { NetInfo, Animated, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class LoadDataScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                сheckingСonnection: lang.сheckingСonnection,
                сheckingCode: lang.сheckingCode,
                getData: lang.getData,
            },
            connection: '',
            code: '',
            data: '',
            res: '',
            enterdKeyInInput: ''
        }
    }

    componentWillMount() {
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
        this.сheckingСonnection()
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.top}>
                    <Image style={styles.preloader} source={require('../img/preloader.gif')} />
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.text}>{this.state.languageTexts.сheckingСonnection[`${this.state.language}`]} {this.state.connection}</Text>
                    <Text style={styles.text}>{this.state.languageTexts.getData[`${this.state.language}`]} {this.state.data}</Text>
                    <Text style={styles.text}>{this.state.languageTexts.сheckingCode[`${this.state.language}`]} {this.state.code}</Text>
                </View>
            </View>
        )

    }

    сheckingСonnection() {
        NetInfo.isConnected.fetch().then(isConnected => {
            this.setState({
                connection: '' + isConnected
            })
            if (isConnected)
                this.getData()
        });
    }

    getData() {
        AsyncStorage.getItem('key')
            .then(res => {
                this.setState({
                    enterdKeyInInput: res
                })
                if (res !== null) {
                    // fetch('http://stekolschikov.info/programs/28/get.php')
                    fetch('http://shool28.000webhostapp.com/get.php')
                        .then((response) => response.json())
                        .then((responseJson) => {
                            this.setState({
                                res: responseJson,
                                data: '' + true
                            })
                            this.validator()
                        })
                        .catch((error) => {
                            alert('err2')
                        });
                } else {
                    alert('Введите код!')
                }
            })
    }

    validator() {
        let valid = false
        let user = ''
        for (let i = 0; i < this.state.res.users.length; i++) {
            if (this.state.res.users[i].id == this.state.enterdKeyInInput) {
                valid = true
                user = this.state.res.users[i]
            }
        }
        if (valid) {
            this.setState({
                code: 'true'
            })
            AsyncStorage.setItem('data', JSON.stringify(this.state.res))
            AsyncStorage.setItem('user', JSON.stringify(user))
            AsyncStorage.setItem('class', JSON.stringify(this.state.res.timetable[user.class]))
            this.props.navigation.navigate('Menu')
        } else {
            this.setState({
                code: 'false'
            })
        }
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#2196f5',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preloader: {
        width: 150,
        height: 150
    },
    bottom: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: 'white',
        fontSize: style.h2Size
    }
});