import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, ActivityIndicator, Image, Iframe } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ShowProfile() {

  const [profile, setProfile] = useState({})
  console.log("profileeeeeeee", profile)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getData = async () => await AsyncStorage.getItem('token')

  useEffect(() => {
    async function loadProfile() {
      setLoading(true)
      //const getData = async () => await AsyncStorage.getItem('token') 
      const token = await getData()
      console.log('el mismo token', token)
      console.log('data', getData)
      axios({
        method: 'GET',
        baseURL: 'http://192.168.20.21:8000',
        url: '/teacher/',
        headers: {
          Authorization: `Token ${token}`
        }
      })
        .then(({ data }) => {
          setProfile(data)
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
    loadProfile()
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
        <Text>oopp! cant update info</Text>
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{profile.username}</Text>
      <Text>{profile.description}</Text>
      <Text>{profile.email}</Text>
      <Image
            style={styles.image}
            source={{ uri: profile.image }}
          
          />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  }
});
