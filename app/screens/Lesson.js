import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ShowOneLesson from '../components/Lesson/showOneLesson'


export default function Lesson() {
  return (
    <View style={styles.container}>
      <Text>Session</Text>
      <ShowOneLesson/>
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
