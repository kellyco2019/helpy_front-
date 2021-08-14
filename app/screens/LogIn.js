import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ModalLogIn from '../components/teacherMember/modalLogIn';
import ModalRegister from '../components/teacherMember/modalRegister';


const image = { uri: "https://reactjs.org/logo-og.png" };


export default function LogIn() {
  <View style={styles.containerBack}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.text}>Inside</Text>
  </ImageBackground>
</View>

  return (
    <View style={styles.container}>
   
      <Text>Welcome to OM</Text>
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

  containerBack: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 48,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});


