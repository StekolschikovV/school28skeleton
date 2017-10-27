import React from 'react'
import { ScrollView, StyleSheet, Text, View, Button, Image, Platform, AsyncStorage, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import { StackNavigator } from 'react-navigation'
import TopBar from './components/topBar'
import { style, lang } from './DB'

let { height, width } = Dimensions.get('window')

export default class EstimatesScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            language: '',
            languageTexts: {
                title_estimates: {
                    RU: 'Оценки',
                    UA: 'Oцінки',
                    EN: 'Estimates',
                },
            },
            user: '',
            data: '',
            classmates_in_class: [],
            user_estimates: []
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

        AsyncStorage.getItem('user')
            .then(res => {
                this.setState({
                    user: JSON.parse(res)
                })
            })

        setTimeout(() => {


            let users = Object.keys(this.state.data.estimates[this.state.user.class])
            users.map((e, i) => {
                // console.log(users[i], this.state.user.id, users[i] == 'u_' + this.state.user.id)
                if (users[i] == 'u_' + this.state.user.id) {
                    // console.log(this.state.data.estimates[this.state.user.class]['u_' + this.state.user.id])
                    this.setState({
                        user_estimates: this.state.data.estimates[this.state.user.class]['u_' + this.state.user.id]
                    })
                }
            })

            // let a = this.state.data.estimates[this.state.user.class].users.map((e,i)=>{
            //     console.log(e)
            // })

            // let myClass = this.state.data.estimates.filter((e,i)=>{
            //     console.log(e)
            //     // return true
            //     // if(e.class == this.state.user.class)
            //     //     return true
            //     // else
            //     //     return false
            // })
            // console.log(myClass)
            // this.setState({
            //     student_estimates: myClass
            // })

            // console.log(this.state.data.estimates[this.state.user.class])



            // console.log(users.length)
            // console.log(this.state.data.estimates[this.state.user.class][users[1]])

            // console.log(this.state.user.id)
            // console.log(this.state.user.class)
            // let XXX = this.state.data.estimates['5Б'].u_0
            // Object.keys(XXX)
            // console.log(Object.keys(XXX))







        }, 100)

    }

    render() {

        // console.log(Object.keys(this.state.user_estimates))

        // console.log(this.state.user_estimates)
        // let that = this


        let estimates = Object.keys(this.state.user_estimates).map((e, i) => {
            // console.log(e)

            // console.log(213)


            // let test = <Text>123</Text>
            // let arr = []
            // arr.push(test)
            // arr.push(test)

            for (let i = 0; i < Object.keys(this.state.user_estimates[e]).length; i++) {
                console.log(i, this.state.user_estimates[e])

            }

            // console.log(Object.keys(this.state.user_estimates[e]).length)

            return (
                <View>
                    <View>
                        <Text>{e}</Text>


                    </View>
                </View>
            )
        })


        return (
            <View style={styles.root}>

                <TopBar text={this.state.languageTexts.title_estimates[`${this.state.language}`]} t={this} showBTN={true} />

                <ScrollView style={styles.container}>
                    {estimates}
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
    el: {
        width: width - (style.blockPadding * 2),
        marginLeft: style.blockPadding,
        marginTop: style.blockPadding,
        backgroundColor: style.color2,
        flexDirection: 'row',
    },
    photo: {
        width: width / 5,
        height: width / 5,
        marginRight: style.blockPadding,
    },
    info: {
        flex: 1,
    },
    name: {
        color: 'white',
        fontSize: style.h1Size
    },
    subject: {
        color: 'white',
        fontSize: style.h2Size
    },
    phone: {
        color: 'white',
        fontSize: style.h2Size
    },
    email: {
        color: 'white',
        fontSize: style.h2Size
    }
})
