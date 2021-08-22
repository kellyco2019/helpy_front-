import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Lesson from '../../screens/Lesson';

export default function ShowMyLessons() {

  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    axios({
 
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.20.21:8000',
      url: '/lessons/home'
    })
      .then(({ data }) => {
        console.log(data)
        setLessons(data)
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
    <SafeAreaView style={styles.container}>
     <FlatList
       style={styles.list}
       data={lessons}
       renderItem={({ item }) => (
        <View>
               
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>Type of Event: {item.category}</Text>
          <Text> <Text bold>Minutes: </Text>{item.time}</Text>
          <Text>{item.photo}</Text>
          <Text>{item.category}</Text>
          <Text>{item.teacher}</Text>
          <Button
              title="View More"
              onPress={() => navigation.navigate('Lesson', {
                _id: item._id,
                title: item.title,
              })}
            /> 
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
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
