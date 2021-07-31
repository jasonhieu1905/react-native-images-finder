import { Image, Text, View } from 'react-native';

import React from 'react';

export const ImageDetail = ({title, src}) => {
    return <View>
        <Image source={src} />
        <Text>{title}</Text>
    </View>
}