import React from 'react'
import { StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

let { height, width } = Dimensions.get('window')

import { style, lang } from './DB'
import TopBar from './components/topBar'


export default class HowGetCodeScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                howGetCode: {
                    RU: 'Как получить код?',
                    UA: 'Як отримати код?',
                    EN: 'How to get the code?',
                },
                howGetCodeBigText: lang.howToGetTheCodeBigText
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
    
                <TopBar text={this.state.languageTexts.howGetCode[`${this.state.language}`]} t={this} showBTN={true} />
  
                <View style={styles.container}>
                    <Text style={styles.howGetCodeBigText}>
                        {this.state.languageTexts.howGetCodeBigText[`${this.state.language}`]}
                    </Text>
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
    container: {
        flex: 1,
    },
    howGetCodeBigText: {
        color: 'white',
        padding: style.blockPadding
    }
});