import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import ModalLogIn from '../components/teacherMember/modalLogIn';
import ModalRegister from '../components/teacherMember/modalRegister';


const image = { uri: "https://res.cloudinary.com/evollve-sas/image/upload/v1629224085/14744313464368656296_vcvlg7.jpg" };

export default function LogIn() {
  <View style={styles.containerBack}>

  </View>

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>OM</Text>

        <View style={styles.container}>
          <ModalRegister />
          <ModalLogIn />
        </View>

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",

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
  }
});


