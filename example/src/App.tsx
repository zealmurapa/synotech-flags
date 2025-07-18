import * as React from 'react'

import { StyleSheet, Text, View } from 'react-native'
import { Al, Flag, Languages } from '../..'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Synotech Flags - Cross Platform</Text>
            <Flag code="us" size={48} />
            <Flag code="gb" size={48} />
            <Flag code="ca" size={48} />
            <Al width={48} height={48} />
            <Languages.En width={48} height={48} />
            <Al />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 60,
        height: 60,
        marginVertical: 20,
    },
})
