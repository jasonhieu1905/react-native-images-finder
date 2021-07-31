import { Button, Text, View } from 'react-native';

import React from 'react';

export const ColorCounter = ({color, increase, decrease}) => {
    return <View>
        <Text>{color}</Text>
        <Button title="Increase" onPress={increase} />
        <Button title="Decrease" onPress={decrease} />
    </View>
}