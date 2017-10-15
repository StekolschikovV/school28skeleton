import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class TimetableScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                timetable: {
                    RU: 'Расписание',
                    UA: 'Розклад',
                    EN: 'Timetable',
                },
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

        AsyncStorage.getItem('data')
            .then(res => {
                this.setState({
                    data: JSON.parse(res)
                })
            })
    }

    render() {
        return (
            <View style={styles.root}>

                <TopBar text={this.state.languageTexts.timetable[`${this.state.language}`]} t={this} showBTN={true} />

                <View style={styles.topDataControls}>

                    <TouchableOpacity style={styles.topDataControlsContainerLeft}>
                        <Text style={styles.topDataControlsContainerText}>&lt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerCenter}>
                        <Text style={styles.topDataControlsContainerText}>20/07/17</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerRight}>
                        <Text style={styles.topDataControlsContainerText}>&gt;</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView style={styles.container}>

                    <View>

                        <Text>123</Text>

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
    topDataControls: {
        flexDirection: 'row',
        backgroundColor: style.color3
    },
    topDataControlsContainer: {
        width: (width/3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
    },
    topDataControlsContainerLeft: {
        width: (width/3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerRight: {
        width: (width/3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerCenter: {
        width: (width/3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color3,
    },
    topDataControlsContainerText: {
        color: 'white',
        fontSize: style.h2Size
    }
});