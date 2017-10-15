import React from 'react'
import { Text, View, StyleSheet, Platform, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { style, lang } from '../DB'
let { height, width } = Dimensions.get('window')

export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.topBar}>
                {this.props.showBTN ? (
                    <TouchableOpacity onPress={() => this.props.t.props.navigation.goBack()}>
                        <Text style={styles.topBarGoBack}>&lt;</Text>
                    </TouchableOpacity>
                ) : (
                        <Text></Text>
                    )}

                <Text style={styles.topBarText}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: style.color1,
        flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
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
});