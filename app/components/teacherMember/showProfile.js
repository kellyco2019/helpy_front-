import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'

export default function ShowProfile() {
  
  const [profile, setProfile] = useState({})
  // const route = useRoute()

  // //esta linea es de roomatch
  // //const [profile, setProfile] = useState(dataProfile);

  // useEffect(() => {
  //   axios({
  //     method: 'GET',
  //     baseURL: 'http://192.168.20.21:8000',
  //     url: `/teacher/${route.params._id}`
      
  //   })
  //     .then(({ data }) => setProfile(data))
  // }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{profile.username}</Text>
          <Text>{profile.description}</Text>
          <Text>{profile.email}</Text>
          <Text>{profile.photo}</Text>
          <Text>{profile.category}</Text>
          <Text>{profile.video}</Text>
          <Text>{profile.tags}</Text>
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

