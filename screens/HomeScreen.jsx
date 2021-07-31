import { Button, Text, View } from 'react-native';

import React from 'react';

export const HomeScreen = ({ navigation }) => {
    return <View>
        <Text>Home screen</Text>
        <Button title={"Go to Profile screen"} 
        onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
        <Button title={"Go to Image screen"} 
        onPress={() => navigation.navigate('Image')} />
        <Button title={"Go to Color Counter screen"} 
        onPress={() => navigation.navigate('ColorCounter')} />
    </View>
}