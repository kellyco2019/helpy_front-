import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
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

export default function ShowAllLessons() {

  const [lessons, setLessons] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    setLoading(true)
    axios({

      method: 'GET',
      baseURL: 'http://192.168.20.21:8000',
      url: '/lessons/home'
    })
      .then(({ data }) => {
        setLessons(data)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
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
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={lessons}
        renderItem={({ item }) => (
          <View>
            
            <Text style={styles.title}>{item.title}</Text>
            <Text> {item.description}</Text>
            <Image
              style={styles.image}
              source={{ uri: item.image }}
            />
            <Text>Type of Event: {item.category}</Text>
            <Text> <Text bold>Minutes: </Text>{item.time}</Text>
            
            <Button
              size="sm"
              colorScheme="secondary"
              
              onPress={() => navigation.navigate('Event', {
                _id: item._id,
                title: item.title,
              })}
            >
              Go to Event
            </Button>
            <Text></Text>
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
    width: 250,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingHorizontal: 10,
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

