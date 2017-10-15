import React from 'react'
import { StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { style } from './DB'

let { height, width } = Dimensions.get('window')

export default class HowGetCodeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                howGetCode:{
                    RU: 'Как получить код?',
                    UA: 'Як отримати код?',
                    EN: 'How to get the code?',
                }
            }
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
                <View style={styles.topBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.topBarGoBack}>&lt;</Text>
                    </TouchableOpacity>
                    <Text style={styles.topBarText}>
                        {this.state.languageTexts.howGetCode[`${this.state.language}`]}
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text>ffff2</Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#2196f5',
        paddingTop: Platform.OS === 'android' ? 25 : 0,
    },
    topBar: {
        backgroundColor: style.color1,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1
    },
    topBarGoBack: {
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        paddingLeft: style.blockPadding,
        paddingRight: style.blockPadding,
        backgroundColor: style.color2,
        color: 'white'
    },
    topBarText: {
        width: (width - (style.blockPadding * 2)),
        backgroundColor: style.color1,
        textAlign: 'center',
        paddingTop: style.blockPadding / 2,
        color: 'white'
    },
    container: {
        flex: 1,
    },

});