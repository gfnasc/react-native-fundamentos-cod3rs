import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import Props from './components/Props'

export default () => {
    return (
        <SafeAreaView style={style.App}>
            <Primeiro />
            <Props x={2} y={7} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})