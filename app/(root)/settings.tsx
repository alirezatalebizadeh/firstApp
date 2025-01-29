import { View, Text } from 'react-native'
import React from 'react'

const Setting = ({ pageName = "Setting" }: any) => {
    return (
        <View>
            <Text>Setting / {pageName}</Text>
        </View>
    )
}

export default Setting