import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, FlatList, Image } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        baseURL: 'http://192.168.20.21:8000',
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
          <Text style={styles.title}>{item.title}</Text>
          <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
          <Text>{item.category}</Text>
          <Text>{item.teacher.usename}</Text>
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    width: 400,
    height: 300,
  }
});
