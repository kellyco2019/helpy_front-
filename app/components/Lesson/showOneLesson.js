import React, { useEffect, useState } from 'react'
import { View, StatusBar, StyleSheet, Image, ScrollView } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import { Video, AVPlaybackStatus } from 'expo-av';
import {
  Text,
  Button,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function ShowOneLesson() {
  const [lesson, setLesson] = useState({})
  const navigation = useNavigation()
  
  const route = useRoute()
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  console.log(route.params)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.20.21:8000', 
      url: `lessons/lesson/${route.params._id}`
      
    })
      .then(({ data }) => setLesson(data))
  }, [])

  // let link= lesson.link
  return (
    <ScrollView>
    <View style={styles.list}>
     
      <Text style={styles.title}>{lesson.title}</Text>
          <Text>{lesson.description}</Text>
        
          <Image
            style={styles.image}
            source={{ uri: lesson.image }}
          />
          
          <Text> <Text bold>Minutes: </Text>{lesson.time}</Text>
          <Button   
          size="sm"
          colorScheme="secondary"     
              onPress={() => navigation.navigate('Watch Video', {
                _id: lesson._id,
                video: lesson.title,
                uri: lesson.image
              })} >
                Go to Video
              </Button>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 0,
    width: 380,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 400,
    height: 300,
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
