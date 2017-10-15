import React from 'react'
import { NetInfo, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'

import { style } from './DB'

let { height, width } = Dimensions.get('window')

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                bottom: {
                    RU: 'У меня нет кода',
                    UA: 'У мене немає коду',
                    EN: 'I do not have code',
                },
                schoolH0: {
                    RU: 'Школа 28',
                    UA: 'Школа 28',
                    EN: 'School 28',
                },
                lisichanskl: {
                    RU: 'Лисичанськ',
                    UA: 'Лисичанськ',
                    EN: 'Lisichansk',
                },
                studentsCode: {
                    RU: 'Код ученика: ',
                    UA: 'Код учня: ',
                    EN: 'Student\'s code: ',
                },
                enter: {
                    RU: 'Войти',
                    UA: 'Увійти',
                    EN: 'Enter',
                },
                codeEmpty: {
                    RU: 'Введите код!',
                    UA: 'Введіть код!',
                    EN: 'Enter code!',
                },
                inputValue: ''
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
        this.input.focus()
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

                    <View style={styles.school}>
                        <Text style={styles.h0}>
                            {this.state.languageTexts.schoolH0[`${this.state.language}`]}
                        </Text>
                        <Text style={styles.h1}>
                            {this.state.languageTexts.lisichanskl[`${this.state.language}`]}
                        </Text>
                    </View>

                    <View style={styles.login}>
                        <View style={styles.loginTop}>
                            <Text style={styles.studentsCode}>
                                {this.state.languageTexts.studentsCode[`${this.state.language}`]}
                            </Text>
                            <TextInput
                                style={styles.studentsCodeInput}
                                underlineColorAndroid='rgba(0,0,0,0)'
                                ref={input => { this.input = input }}
                                onChangeText={(event) => { this.setState({ inputValue: event }) }}
                            />
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.verification() }} >
                            <Text style={styles.btnText} >
                                {this.state.languageTexts.enter[`${this.state.language}`]}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.bottom} >
                        <Text style={styles.bottomText} onPress={() => this.props.navigation.navigate('HowGetCode')}>
                            {this.state.languageTexts.bottom[`${this.state.language}`]}
                        </Text>
                    </View>
                </Image>
            </View>
        );
    }

    verification() {
        if(this.state.inputValue){
            AsyncStorage.setItem('key', this.state.inputValue)
            this.props.navigation.navigate('LoadData')
        } else {
            alert(this.state.languageTexts.codeEmpty[`${this.state.language}`])
        }
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
        top: style.blockPadding,
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
    },
    school: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    h0: {
        fontSize: style.h0Size,
        color: 'white'
    },
    h1: {
        fontSize: style.h1Size,
        color: 'white'
    },
    login: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    loginTop: {
        borderBottomColor: 'white',
        width: (width - (style.blockPadding * 2)),
        borderBottomWidth: 1,
        flexDirection: 'row',
        paddingBottom: (style.blockPadding / 2),
    },
    studentsCode: {
        width: 100,
        textAlign: 'center',
        color: 'white',
        fontSize: style.h2Size,
    },
    studentsCodeInput: {
        width: ((width - (style.blockPadding * 2)) - 100),
        color: 'white',
    },
    btn: {
        backgroundColor: style.color2,
        padding: (style.blockPadding / 2),
        marginTop: (style.blockPadding / 2),
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: style.h2Size
    },
    bottom: {
        position: 'absolute',
        bottom: style.blockPadding,
    },
    bottomText: {
        color: 'white',
        fontSize: 12,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    }
});