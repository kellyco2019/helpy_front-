import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function ShowLessonAndTeacher() {
  const [lesson, setLesson] = useState([])
  console.log("lessonnnnnnnn", lesson)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = async () => await AsyncStorage.getItem('token')

  useEffect(() => {
    async function loadLesson() {
      setLoading(true)
      //const getData = async () => await AsyncStorage.getItem('token') 
      const token = await getData()
      console.log('el mismo token', token)
      console.log('data', getData)
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
          console.log(data)
        })
        .catch((error) => {
          setError(true)
          console.log(error)
        })
        .finally(() => {
          setLoading(false)
          console.log('ya pase por aqui', token)
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
          <Text>{item.photo}</Text>
          <Text>{item.category}</Text>
          <Text>{item.teacher}</Text>
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
    fontSize: 24,
    fontWeight: 'bold'
  }
});
