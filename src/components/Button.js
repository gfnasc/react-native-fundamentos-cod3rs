import React from 'react'
import { Button } from 'react-native'

export default () => {

    function exec() {
        console.warn('Teste de botão!')
    }

    return (
        <Button title="Executar" onPress={exec} />
    )
}