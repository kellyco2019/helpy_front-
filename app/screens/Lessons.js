import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowAllLessons from '../components/Lesson/showAllLessons';


export default function Lessons() {
  return (
    <View style={styles.container}>
     
    <ShowAllLessons/>
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
