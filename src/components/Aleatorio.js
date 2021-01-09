import React from 'react'
import { Text } from 'react-native'

// note que na declaração da função está sedo usada a desestruturação
export default ({min, max}) => 
    <Text>Numero aleatório entre {min} e {max} = { parseInt(Math.random() * (max - min) + min) }</Text>
