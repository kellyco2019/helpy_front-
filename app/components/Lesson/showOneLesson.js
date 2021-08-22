import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Image, Button, ScrollView } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import { Video, AVPlaybackStatus } from 'expo-av';
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
      baseURL: 'http://192.168.20.21:8000', 
      url: `lessons/lesson/${route.params._id}`
      
    })
      .then(({ data }) => setLesson(data))
  }, [])

  // let link= lesson.link
  return (
    <ScrollView>
    <View style={styles.container}>
     
      <Text style={styles.title}>{lesson.title}</Text>
          <Text>{lesson.description}</Text>
          {/* <Text>{lesson.link}</Text> */}
          <Image
            style={styles.image}
            source={{ uri: lesson.image }}
          />
          <Text>{lesson.category}</Text>
          <Text>{lesson.time}</Text>
          <Button
              color="#f194ff"
              title="Go to video"
              onPress={() => navigation.navigate('Watch Video', {
                _id: lesson._id,
                video: lesson.title,
                uri: lesson.image
              })} />
      <StatusBar style="auto" />

{/* <Video
        ref={video}
        style={styles.video}
        source={{
          uri: lesson.video,
        }}
        useNativeControls
        resizeMode="contain"
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay={false}
        AVPlaybackStatus
      />
      <View style={styles.buttons}>
        <Button
          color="#f194ff"
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
    </View>   */}
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
