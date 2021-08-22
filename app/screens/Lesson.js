import React from 'react'
import { View,  StatusBar, StyleSheet } from 'react-native'
import ModalCreateComments from '../components/Lesson/modalCreateComments';
import ShowOneLesson from '../components/Lesson/showOneLesson';
import {
  Modal,
  Button,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";

//Modal updateLesson debe renderizara solo cuando tenga toquen
export default function Lesson() {
  return (
    <View style={styles.container}>
   <Heading>Event</Heading>
      <ShowOneLesson/>
      <ModalCreateComments/>
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

