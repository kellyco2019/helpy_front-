import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, TextInput, Button , Switch, SafeAreaView , ActivityIndicator } from 'react-native';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateLesson() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState()
    //const [time, setTime] = useState(10)
    //const [photo, setPhoto] = useState('')
    const [terms, setTerms] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const route = useRoute()
    console.log(route)
    const navigation = useNavigation()

    console.log(route.params)
    
  async function handleSubmit() {
   
    setLoading(true)
    const token =  await AsyncStorage.getItem('token')
    console.log('soyeltoken', token)
    axios({
      method: 'POST',
      baseURL: 'http://192.168.20.21:8000',
      url: '/lessons/teacherProfile/',
      data : { title, description, category },
      headers : {
        Authorization : `token ${token}`
      }
    })
    .then(({ data }) => {
      console.log(data)
      navigation.navigate('Lesson', {
        _id: data._id,
        title: data.title,
      })
      })
      .catch((e) => {
        setError(true)
        console.log(e.message)
      })
      .finally(() => {
        setLoading(false)
      })
  
  }
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
        <Text>Try Later</Text>
      </SafeAreaView>
    )
  }
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput
                placeholder="title"
                onChangeText={value => setTitle(value)}
                value={title}
            />
            <Text>Description</Text>
            <TextInput
                placeholder="description"
                onChangeText={value => setDescription(value)}
                value={description}
            />
            <Text>Categoryss</Text>
            <Picker
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                selectedValue={category}
            >
                <Picker.Item label="Meditation" value="meditate" />
                <Picker.Item label="Yoga" value="yoga" />
            </Picker>
            <Text>How long is video?</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={10}
                maximumValue={50}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                // onValueChange={time => setTime(time)}
                // value={time}
            />
            <Switch
                onValueChange={value => setTerms(value)}
                value={terms}
            />
             
            <Button
                title="Create Event"
                onPress={handleSubmit}
            />
              
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

