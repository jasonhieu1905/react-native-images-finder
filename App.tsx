import { StyleSheet, View } from 'react-native';

import { ColorCounterScreen } from './screens/ColorCounterScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ImageScreen } from './screens/ImageScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from './screens/ProfileScreen';
import React from 'react';
import { UnsplashScreen } from './screens/UnsplashScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Restaurant"
          component={UnsplashScreen}
          options={{ title: 'Find Images' }}
        />
         <Stack.Screen name="Profile" component={ProfileScreen} />
         <Stack.Screen name="Image" component={ImageScreen} />
         <Stack.Screen name="ColorCounter" component={ColorCounterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
