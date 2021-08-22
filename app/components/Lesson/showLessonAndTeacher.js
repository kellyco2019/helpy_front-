import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View,  SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Modal,
  Button,
  Text,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
export default function ShowLessonAndTeacher() {
  const [lesson, setLesson] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = async () => await AsyncStorage.getItem('token')

  useEffect(() => {
    async function loadLesson() {
      setLoading(true)
      const token = await getData()
      axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.20.21:8000',
        url: '/lessons/teacher/',
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(({ data }) => {
          setLesson(data)
        })
        .catch((error) => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })

    }
    loadLesson()
  }, [])

 
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>oopp! can`t get info</Text>
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
     <FlatList
       style={styles.list}
       data={lesson}
       renderItem={({ item }) => (
        <View>
          <Text> </Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text> {item.description}</Text>
          <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <Text><Text bold>Member Name:</Text>{item.member}</Text>
            <Text>Type of Event: {item.category}</Text>
            <Text> <Text bold>Minutes: </Text>{item.time}</Text>

          <Text> </Text>
          <Divider my={2} />
          
        </View>
        
      )}
      keyExtractor={item => `${item._id}`} 
    />
    <StatusBar style="auto" /> 
   
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 390,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  image: {
    width: 400,
    height: 300,
  }
});
