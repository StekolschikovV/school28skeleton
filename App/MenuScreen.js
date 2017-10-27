import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class MenuScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                menu: {
                    RU: 'Меню',
                    UA: 'Меню',
                    EN: 'Menu',
                },
                timetable: {
                    RU: 'Расписание',
                    UA: 'Розклад',
                    EN: 'Timetable',
                },
                estimates: {
                    RU: 'Оценки',
                    UA: 'Oцінки',
                    EN: 'Estimates',
                },
                teachers: {
                    RU: 'Преподаватели',
                    UA: 'Викладачі',
                    EN: 'Teachers',
                },
                classmates: {
                    RU: 'Одноклассники',
                    UA: 'Однокласники',
                    EN: 'Classmates',
                },
                classNews: {
                    RU: 'Новости класса',
                    UA: 'Новини класу',
                    EN: 'Class News',
                },
                schoolNews: {
                    RU: 'Новости школы',
                    UA: 'Новини школи',
                    EN: 'School News',
                }
            },
            data: ''
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

                <TopBar text={this.state.languageTexts.menu[`${this.state.language}`]} t={this} />

                <ScrollView style={styles.container}>

                    <View style={styles.containerInner}>

                        <TouchableOpacity style={styles.el} onPress={() => this.props.navigation.navigate('Timetable')}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.timetable[`${this.state.language}`]}
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.el} onPress={() => this.props.navigation.navigate('Estimates')}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.estimates[`${this.state.language}`]}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.el} onPress={() => this.props.navigation.navigate('Teachers')}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.teachers[`${this.state.language}`]}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.el}  onPress={() => this.props.navigation.navigate('Classmates')}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.classmates[`${this.state.language}`]}
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.el}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.classNews[`${this.state.language}`]}
                            </Text>
                        </View>

                        <View style={styles.el}>
                            <Text style={styles.containerInnerText}>
                                {this.state.languageTexts.schoolNews[`${this.state.language}`]}
                            </Text>
                        </View>

                    </View>

                </ScrollView>

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
    containerInner: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap",
        paddingTop: style.blockPadding
    },
    el: {
        width: (width / 2) - style.blockPadding,
        height: (width / 2) - style.blockPadding,
        backgroundColor: style.color2,
        margin: style.blockPadding / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInnerText: {
        color: 'white',
        fontSize: style.h1Size
    }
});