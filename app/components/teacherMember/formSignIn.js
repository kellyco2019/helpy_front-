import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , SafeAreaView , ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  function handleSubmit() {

    const storeData = async (value) => {
      try {
      await AsyncStorage.setItem('token', value)
      const token =  await AsyncStorage.getItem('token')
      console.log('token', token)
     } catch (error) {
        console.log(error)
      }
    }
    
    setLoading(true)
    axios({
      method: 'POST',
      baseURL: 'http://192.168.20.21:8000',
      url: '/teacher/signin',
      data : { email, password },
    })
    .then(({ data }) => {
      console.log(data)
       //poner condicionalde saber que si tiene 
       //token lo dirija a la parte de lessons sino no
       // lo deje ir a la parte de lessons
      if (data.token){
        storeData(data.token)
        navigation.navigate('Home', {params : data._id})
      } else {
        navigation.navigate('LogIn')
      }})
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    console.log({ email, password })
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
        <Text>oopp! can`t create user</Text>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
       <Text>Email</Text>
      <TextInput
        placeholder="example@example.com"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType="email-address"
      />
       <Text>password</Text>
      <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
      <Button
        title="Sign In"
        onPress={handleSubmit}  
      />
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
  


