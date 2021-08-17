import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native'
import { StyleSheet, Text, View, FlatList, SafeAreaView, ActivityIndicator, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function FilterCategorys() {

    const [lessons, setLessons] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const route = useRoute()
    console.log(route)
    const navigation = useNavigation()

    console.log(route.params)
    let categorys = route.params._category
    
    useEffect(() => {
    setLoading(true)
    axios({
 
      method: 'GET',
      baseURL: 'http://192.168.20.21:8000',
      url: `/lessons/?category=${categorys}`,
    })
      .then(({ data }) => {
        console.log(data)
        setLessons(data)
      })
      .catch(() => {
        setError(true)
        console.log(e.message)
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