import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowAllLessons from  './app/components/Lessons/ShowAllLessons'

export default function Lessons() {
  return (
    <View style={styles.container}>
      <Text>Sesions</Text>
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
