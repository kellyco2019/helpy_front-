import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image,  StyleSheet, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Input, 
  Heading,
  Select,
  CheckIcon,
  Switch,
  HStack,
  NativeBaseProvider,Text,
  Button,
} from "native-base";


export default function UpdateEvent(){
    const [title, setTitle] = useState("");
    const [member, setMember] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState('');
    const [terms, setTerms] = useState(false);
    const [cameraRollPermission, setCameraRollPermission] = useState('denied')
    const [cameraPermission, setCameraPermission] = useState(false)
    const [image, setImage] = useState(null)
    const [video, setVideo] = useState(null)
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
  
  
    async function handlePickImage() {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      })
      if (!data.cancelled) {
        setImage(data)
      }
    }
    async function handlePickVideo() {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
      })
      if (!data.cancelled) {
        setVideo(data)
      }
    }
    async function handleTakePicture() {
      const data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
  
      })
  
      if (!data.cancelled) {
        setImage(data)
      }
    }
  
    async function handleSubmit(e) {
  
  
      const data = new FormData()
  
      data.append('title', title)
      data.append('member', member)
      data.append('description', description)
      data.append('category', category)
      data.append('time', time)
      data.append('terms', terms)
      if (image) {
        data.append('image', { uri: image.uri, name: "image", type: "image/jpg" })
      }
  
      if (video) {
        data.append('video', { uri: video.uri, name: "video", type: "video/mp4" })
      }
  
      setLoading(true);
      const token = await AsyncStorage.getItem("token");
      axios({
        method: "PUT",
        baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.20.21:8000',
        url: `/lessons/${route.params._id}`,
        data,
        headers: {
          Authorization: `token ${token}`,
          'Content-Type': 'multipart/form-data',
        }
      })
        .then(({ data }) => {
          console.log(data);
          navigation.navigate("My Events", {
            _id: data._id,
            title: data.title,
            member: data.member,
            description: data.description,
            category: data.category,
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
        console.log(error)
      return (
        <SafeAreaView style={styles.container}>
          <Text>opsss!!intenta de nuevo mas tarde </Text>
        </SafeAreaView>
      );
    }
  
    return (
  
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <NativeBaseProvider>
            <Heading>Update Event</Heading>
            <Text></Text>
            <Text>Title</Text>
            <Input
              placeholder="Would you like to change name of the event?"
              onChangeText={(value) => setTitle(value)}
              value={title}
            />
            <Text></Text>
            <Text>Description</Text>
            <Input
              placeholder="Would you like to change description of the event?"
              onChangeText={(value) => setDescription(value)}
              value={description}
            />
            <Text></Text>
            <Text>Member Name</Text>
            <Input
              placeholder="How do you want to be recognized"
              onChangeText={(value) => setMember(value)}
              value={member}
            />
            <Text></Text>
            <Text>Category</Text>
  
            <Select
              selectedValue={category}
              minWidth={200}
              accessibilityLabel="Pick one"
              placeholder="Choose a new category"
              onValueChange={(itemValue) => setCategory(itemValue)}
              _selectedItem={{
                bg: "secondary.600",
                endIcon: <CheckIcon size={4} />,
              }}
            >
              <Select.Item label="Mindfullness" value="Mindfullness" />
              <Select.Item label="Yoga" value="Yoga" />
              <Select.Item label="Stretching" value="Stretching" />
              <Select.Item label="Gentle" value="Gentle" />
  
            </Select>
            <Text></Text>
            <Text fontSize="md">Minutes</Text>
            <Input
              placeholder="How long is the new video?"
              onChangeText={(value) => setTime(value)}
              value={time}
            />
             
            <HStack alignItems="center" space={8}>
              <Text fontSize="md">Acept terms</Text>
              <Switch onValueChange={(value) => setTerms(value)} value={terms} />
            </HStack>
  
          </NativeBaseProvider>
          <Text> </Text>
          <View style={styles.container}>
            {cameraRollPermission === 'granted' ? (
              <Button
              size="sm"
              variant="outline"
                colorScheme="secondary" 
                onPress={handlePickVideo}
                >
               Pick a Video
              </Button>
            ) : (
              <Text>Please allow the app to access photos in your settings</Text>
            )}
          </View>
          <Text ></Text>
          <View style={styles.container}>
            {cameraPermission ? (
              <Button
              size="sm"
              variant="outline"
              colorScheme="secondary" 
              onPress={handleTakePicture}
              >
              Take a Picture
              </Button>
  
            ) : (
              <Text>Please allow the app to access camera in your settings</Text>
            )}
             <Text ></Text>
            {cameraRollPermission === 'granted' ? (
              <Button
              size="sm"
                colorScheme="secondary" 
                variant="outline"
                onPress={handlePickImage}
                >
                Pick an Image
              </Button>
              
            ) : (
              <Text>Please allow the app to access photos in your settings</Text>
            )}
            {!!image && (
              <Image
                style={styles.image}
                source={{ uri: image.uri }}// url
              />
            )}
               <Text ></Text>
            <Button onPress={handleSubmit}
           
              size="md"
              colorScheme="secondary" 
            >
             Update Event
            </Button>
            <StatusBar style="auto" />
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
         flex: 1,
      //   backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
      width: 390,
      textAlign: "center",
    },
    scrollView: {
      marginHorizontal: 10,
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      width: 400,
      height: 300,
    }
  });