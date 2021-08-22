import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "./app/screens/LogIn";
import Home from "./app/screens/Home";
import Lessons from "./app/screens/Lessons";
import Lesson from "./app/screens/Lesson";
import Profile from "./app/screens/Profile";
import Category from "./app/screens/Category";
import MyLesson from "./app/screens/MyLesson";
import NewLesson from "./app/screens/NewLesson";
import WatchVideo from "./app/screens/WatchVideo";
import {  NativeBaseProvider } from "native-base"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Events' component={Lessons} />
          <Stack.Screen name="Event" component={Lesson} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name='My Events' component={MyLesson} />
          <Stack.Screen name="New Event" component={NewLesson} />
          <Stack.Screen name="Watch Video" component={WatchVideo} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );




}
