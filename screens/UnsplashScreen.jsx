import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { View } from 'react-native';
import { useState } from 'react';

export const UnsplashScreen = ({ navigation }) => {
    const [searchTerm, setSearchTerm] = useState('');
    return <View>
        <SearchBar searchTerm={searchTerm} searchTermChanged={value => setSearchTerm(value)} />

    </View>
}