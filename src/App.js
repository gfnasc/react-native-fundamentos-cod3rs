import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Primeiro from './components/Primeiro'
import Props from './components/Props'
import { Comp1, Comp2 } from './components/Multi'
import Aleatorio from './components/Aleatorio'
import Fragment from './components/Fragment'
import Button from './components/Button'

export default () => {
    return (
        <SafeAreaView style={style.App}>
            <Text style={style.Feature}>#Componente principal App#</Text>
            <Primeiro />
            <Comp1 />
            <Comp2 />
            <Props x={2} y={8} />
            <Aleatorio min={20} max={999}></Aleatorio>
            <Fragment primario="Texto primario" secundario="Texto secundario"></Fragment>
            <Button />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    App: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Feature:{
        fontSize: 28
    }
})