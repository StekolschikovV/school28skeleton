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
                timetable: {
                    RU: 'Расписание',
                    UA: 'Розклад',
                    EN: 'Timetable',
                },
            },
            dateNow: new Date().setHours(0, 0, 0, 0),
            data: '',
            user: '',
            class: '',
            l1: '',
            l2: '',
            l3: '',
            l4: '',
            l5: '',
            l6: '',
            l7: '',
            l8: '',
            l9: '',
            l10: '',
            l11: '',
            l12: '',

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
            .then(res => {
                this.showTimetable()
            });

        AsyncStorage.getItem('user')
            .then(res => {
                this.setState({
                    user: JSON.parse(res)
                })
            })
            .then(res => {
                this.showTimetable()
            });

        AsyncStorage.getItem('class')
            .then(res => {
                this.setState({
                    class: JSON.parse(res)
                })
            })
            .then(res => {
                this.showTimetable()
            });

    }

    render() {
        return (
            <View style={styles.root}>

                <TopBar text={this.state.languageTexts.timetable[`${this.state.language}`]} t={this} showBTN={true} />

                <View style={styles.topDataControls}>

                    <TouchableOpacity style={styles.topDataControlsContainerLeft} onPress={this.clickLeft.bind(this)}>
                        <Text style={styles.topDataControlsContainerText}>&lt;</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerCenter}>
                        <Text style={styles.topDataControlsContainerText}>
                            {this.getTime()}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topDataControlsContainerRight} onPress={this.clickRight.bind(this)}>
                        <Text style={styles.topDataControlsContainerText}>&gt;</Text>
                    </TouchableOpacity>

                </View>

                <ScrollView style={styles.container}>

                    <View>
                        <Text style={styles.el}>1. {this.state.l1}</Text>
                        <Text style={styles.el}>2. {this.state.l2}</Text>
                        <Text style={styles.el}>3. {this.state.l3}</Text>
                        <Text style={styles.el}>4. {this.state.l4}</Text>
                        <Text style={styles.el}>5. {this.state.l5}</Text>
                        <Text style={styles.el}>6. {this.state.l6}</Text>
                        <Text style={styles.el}>7. {this.state.l7}</Text>
                        <Text style={styles.el}>8. {this.state.l8}</Text>
                        <Text style={styles.el}>9. {this.state.l9}</Text>
                        <Text style={styles.el}>10. {this.state.l10}</Text>
                        <Text style={styles.el}>11. {this.state.l11}</Text>
                        <Text style={styles.el}>12. {this.state.l12}</Text>
                    </View>

                </ScrollView>

            </View>
        )
    }

    clickLeft() {
        this.setState({
            dateNow: this.state.dateNow - 86400000
        })
        setTimeout(() => {
            this.showTimetable()
        }, 50)
    }

    clickRight() {
        this.setState({
            dateNow: this.state.dateNow + 86400000
        })
        setTimeout(() => {
            this.showTimetable()
        }, 50)
    }

    getTime() {
        return `${new Date(this.state.dateNow).getDate()}/${new Date(this.state.dateNow).getMonth()}/${new Date(this.state.dateNow).getFullYear()}`
    }

    showTimetable() {

        let l1 = ''
        let l2 = ''
        let l3 = ''
        let l4 = ''
        let l5 = ''
        let l6 = ''
        let l7 = ''
        let l8 = ''
        let l9 = ''
        let l10 = ''
        let l11 = ''
        let l12 = ''

        if (this.state.class[this.state.dateNow]) {
            l1 = this.state.class[this.state.dateNow].lesson[1]
            l2 = this.state.class[this.state.dateNow].lesson[2]
            l3 = this.state.class[this.state.dateNow].lesson[3]
            l4 = this.state.class[this.state.dateNow].lesson[4]
            l5 = this.state.class[this.state.dateNow].lesson[5]
            l6 = this.state.class[this.state.dateNow].lesson[6]
            l7 = this.state.class[this.state.dateNow].lesson[7]
            l8 = this.state.class[this.state.dateNow].lesson[8]
            l9 = this.state.class[this.state.dateNow].lesson[9]
            l10 = this.state.class[this.state.dateNow].lesson[10]
            l11 = this.state.class[this.state.dateNow].lesson[11]
            l12 = this.state.class[this.state.dateNow].lesson[12]
        }

        this.setState({
            l1: l1,
            l2: l2,
            l3: l3,
            l4: l4,
            l5: l5,
            l6: l6,
            l7: l7,
            l8: l8,
            l9: l9,
            l10: l10,
            l11: l11,
            l12: l12
        })
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
        padding: style.blockPadding
    },
    topDataControls: {
        flexDirection: 'row',
        backgroundColor: style.color3
    },
    topDataControlsContainer: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
    },
    topDataControlsContainerLeft: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerRight: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color2,
    },
    topDataControlsContainerCenter: {
        width: (width / 3),
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: style.blockPadding / 2,
        paddingBottom: style.blockPadding / 2,
        backgroundColor: style.color3,
    },
    topDataControlsContainerText: {
        color: 'white',
        fontSize: style.h2Size
    },
    el: {
        fontSize: style.h1Size,
        color: 'white'
    }
});