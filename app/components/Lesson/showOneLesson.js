import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet, Button, FlatList } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function Lesson() {
  const [Lesson, setLesson] = useState({})
  const route = useRoute()

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
      <Text style={styles.title}>{Lesson.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.photo}</Text>
          <Text>{item.category}</Text>
          <Text>{item.video}</Text>
          <Text>{item.tags}</Text>
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
