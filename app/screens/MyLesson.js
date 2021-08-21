import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowLessonAndTeacher from '../components/Lesson/showLessonAndTeacher';


//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function MyLesson() {
  return (
    <View style={styles.container}>
      <Text> My Events</Text>
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