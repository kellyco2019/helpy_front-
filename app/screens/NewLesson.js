import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image,  Text,  StyleSheet, SafeAreaView, ActivityIndicator, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Input,
  Select,
  CheckIcon,
  Switch, 
  HStack,  
  NativeBaseProvider,  
} from "native-base";

export default function NewLesson() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState('');
  const [terms, setTerms] = useState(false);
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
console.log(data)
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
    //e.preventDefault()
    
    const data = new FormData()
    
    data.append('title', title)
    data.append('description', description)
    data.append('category', category)
    data.append('time', time)
    data.append('terms', terms)
    if(image) {
      data.append('image', {uri: image.uri, name:"image", type:"image/jpg"})
    }
    //vide/mp4
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    console.log("soylafototoken", token);
     axios({
      method: "POST",
      baseURL: "http://192.168.20.21:8000",
      url: "lessons/teacherProfile",//reviisar la ruta y el controlador 
      data, //{ title, description, category, image },
      headers: {
         Authorization: `token ${token}`,
         'Content-Type': 'multipart/form-data',
      }
    })
    .then(({ data }) => {
      console.log(data);
      navigation.navigate("Lesson", {
        _id: data._id,
        title: data.title,
        description:data.description,
        category:data.category,
        image: data.image
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
      <NativeBaseProvider>
      <Text>Create New Event</Text>                 
          <Text>Title</Text>
              <Input
                placeholder="title"
                onChangeText={(value) => setTitle(value)}
                value={title}
              />
              <Text>Description</Text>
              <Input
                placeholder="description"
                onChangeText={(value) => setDescription(value)}
                value={description}
              />
              <Text>Category</Text>
              
               <Select
                selectedValue={category}
                minWidth={200}
                accessibilityLabel="Pick one"
                placeholder="What your event is about"
                onValueChange={(itemValue) => setCategory(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Mindfullness" value="Mindfullness" />
                <Select.Item label="Yoga" value="Yoga" />
                <Select.Item label="Stretching" value="Stretching" />
                <Select.Item label="Gentle" value="Gentle" />
        
              </Select>
            
              <Text>How long is video?</Text>
              <Input
                placeholder="min 10 max 30 min"
                onChangeText={(value) => setTime(value)}
                value={time}
              />
               <HStack alignItems="center" space={8}>
              <Text fontSize="lg">Acept terms</Text>
      <Switch onValueChange={(value) => setTerms(value)} value={terms} />
    </HStack>
             
    </NativeBaseProvider> 
    
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
      title="Create Event"
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