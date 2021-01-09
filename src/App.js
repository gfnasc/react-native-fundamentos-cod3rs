import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import Props from './components/Props'
import { Comp1, Comp2 } from './components/Multi'

export default () => {
    return (
        <SafeAreaView style={style.App}>
            <Primeiro />
            <Comp1 />
            <Comp2 />
            <Props x={2} y={8} />
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