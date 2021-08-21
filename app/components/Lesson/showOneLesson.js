import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Image, Button, ScrollView } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import { Video, AVPlaybackStatus } from 'expo-av';

export default function ShowOneLesson() {
  const [lesson, setLesson] = useState({})
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

  return (
    <ScrollView>
    <View style={styles.container}>
     
      <Text style={styles.title}>{lesson.title}</Text>
          <Text>{lesson.description}</Text>
          
          <Image
            style={styles.image}
            source={{ uri: lesson.image }}
          
          />
          <Text>{lesson.category}</Text>
          <Text>{lesson.time}</Text>
          
      <StatusBar style="auto" />

<Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          color="#f194ff"
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />

    </View>  
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
