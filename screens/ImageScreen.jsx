import { ImageDetail } from '../components/ImageDetail';
import React from 'react';
import {View} from 'react-native';

export const ImageScreen = () => {
    return <View>
        <ImageDetail title="Beach" src={require('../assets/images/beach.jpg')} />
        <ImageDetail title="Forest" src={require('../assets/images/forest.jpg')} />
        <ImageDetail title="Mountain" src={require('../assets/images/mountain.jpg')} />
    </View>
}