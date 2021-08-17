import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text , SafeAreaView, ActivityIndicator } from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShowProfile() {
  
  const [profile, setProfile] = useState({})
  console.log("profileeeeeeee", profile)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

const getData = async() => await AsyncStorage.getItem('token')
 console.log(AsyncStorage.getItem('token'))
  useEffect(() => {
    setLoading(true)  
    const token = getData()
    console.log('soyeltoken', token)
    axios({
      method: 'GET',
      baseURL: 'http://192.168.20.21:8000',
      url: '/teacher/',
      headers : {
        authorization : `token ${token}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        setProfile(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  if(loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    )
  }
  if(error) {
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
          <Text>{profile.photo}</Text>
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

