import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ModalLogIn from '../components/teacherMember/modalLogIn';
import ModalRegister from '../components/teacherMember/modalRegister';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Helpy</Text>
      <ModalRegister />
      <ModalLogIn />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

