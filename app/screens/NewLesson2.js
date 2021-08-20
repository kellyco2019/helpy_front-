import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, Image, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import ModalCreateLesson from '../components/Lesson/modalCreateLesson';
import * as ImagePicker from 'expo-image-picker'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewLesson() {
  const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  const [cameraPermission, setCameraPermission] = useState(false)
  //const [file, setFile] = useState(null)
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    
    ImagePicker
      .requestMediaLibraryPermissionsAsync()
      .then(({ status }) => setCameraRollPermission(status))

    ImagePicker
      .requestCameraPermissionsAsync()
      .then(({ status }) => setCameraPermission(status === 'granted'))
  }, [])


  // function selectFile(e) {
  //   setFile(e.target.files[0])
  // }

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }
  async function handleTakePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      
    })

    if(!data.cancelled) {
      setImage(data)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    const data = new FormData()

    if(image) {
      data.append('photo', image, image.name)
    }
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    console.log("soylafototoken", token);
     axios({
      method: "POST",
      baseURL: "http://192.168.20.21:8000",
      url: "/lessons/imagenLesson/",//reviisar la ruta y el controlador 
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
         Authorization: `token ${token}`,
      }
    })
    .then(({ data }) => {
      console.log(data);
      navigation.navigate("Lesson", {
        photo: data.photo
      });
    })
    .catch((e) => {
      setError(true);
      console.log("error", e.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }



  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>opsss!!intenta de nuevo mas tarde </Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Create New Event</Text>
      <ModalCreateLesson/>
      <View style={styles.container}>
      {cameraPermission ? (
        <Button
          color="#f194ff"
          title="Take a Picture"
          onPress={handleTakePicture}
        />
      ) : (
        <Text>Please allow the app to access camera in your settings</Text>
      )}
      {cameraRollPermission === 'granted' ? (
        <Button
          color="#f194ff"
          title="Pick an Image"
          onPress={handlePickImage}
        />
      ) : (
        <Text>Please allow the app to access photos in your settings</Text>
      )}
      {!!image && (
        <Image
          style={styles.image}
          source={{ uri: image.uri }}// url
        />
      )}
      <Button onPress={handleSubmit}
      color="#f194ff"
      title="Save Picture"
      ></Button>
      <StatusBar style="auto" />
    </View>
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
  image: {
    width: 400,
    height: 300,
  }
});