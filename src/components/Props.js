import React from "react"
import { View, Text } from "react-native"

export default (props) => {
    // console.warn(props)
    return (
        <View>
            <Text>O valor de x = {props.x}</Text>
            <Text>O valor de y = {props.y}</Text>
        </View>
    )
}