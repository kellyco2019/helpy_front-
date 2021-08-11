import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ModalUpdateLesson from '../components/Lesson/modalUpdateLesson';
import ShowOneLesson from '../components/Lesson/showOneLesson';


//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function Lesson() {
  return (
    <View style={styles.container}>
      <Text>Session</Text>
      <ShowOneLesson/>
      <ModalUpdateLesson/>
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
