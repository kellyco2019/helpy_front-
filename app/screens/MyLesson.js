import React from 'react'
import { View,  StatusBar, StyleSheet } from 'react-native'
import ShowLessonAndTeacher from '../components/Lesson/showLessonAndTeacher';
import {
  Text,
  Button,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";

//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function MyLesson() {
  return (
    <View style={styles.container}>
      <Heading>My Events</Heading>
      <ShowLessonAndTeacher/>
      <StatusBar style="auto" />
    </View>
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