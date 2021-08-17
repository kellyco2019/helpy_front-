import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function ShowOneLesson() {
  const [lesson, setLesson] = useState({})
  const route = useRoute()

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
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
          <Text>{lesson.description}</Text>
          <Text>{lesson.photo}</Text>
          <Text>{lesson.category}</Text>
          <Text>{lesson.video}</Text>
          <Text>{lesson.tags}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
