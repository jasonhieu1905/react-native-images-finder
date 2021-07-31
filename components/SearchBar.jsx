import { StyleSheet, TextInput, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

export const SearchBar = ({searchTerm, searchTermChanged}) => {
    return <View style={styles.container}>
        <FontAwesome style={styles.iconStyles} name="search" size={24} color="black" />
        <TextInput onChange={() => console.log('abc')} 
            value={searchTerm}
            onChange={(e) => searchTermChanged(e.target.value)} 
            style={styles.inputStyles} 
            placeholder="Search Picture ..." />
    </View>
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      display: 'flex',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
    },
    iconStyles: {
        marginLeft: 10,
        marginTop: 10
    },
    inputStyles: {
        flex: 1,
        marginLeft: 5,
    }
  });
  