// Exemplificação de como usar o React.Fragment para encapsular
// um componente que retorna varios componentes filhos sem
// a utilização de um component View ou SafeAreaView

import React, { Fragment } from 'react'
import { Text } from 'react-native'

export default ({primario, secundario}) => {
    return (
        <Fragment>
            <Text>{primario}</Text>
            <Text>{secundario}</Text>
        </Fragment>
    )
}