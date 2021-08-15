import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './app/screens/LogIn'
import Home from './app/screens/Home'
import Lessons from './app/screens/Lessons'
import Lesson from './app/screens/Lesson'
import Profile from './app/screens/Profile'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="Lesson" component={Lesson} /> 
        <Stack.Screen name="Profile" component={Profile} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}