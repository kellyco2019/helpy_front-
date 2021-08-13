import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , SafeAreaView , ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function Register() {
  const [username, setName] = useState('')
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
      url: '/teacher/signup',
      data : { username, email, password },
    })
    .then(({ data }) => {
      console.log(data)
       //poner condicionalde saber que si tiene 
       //token lo dirija a la parte de lessons sino no
       // lo deje ir a la parte de lessons
      if (data.token){
        storeData(data.token)
        navigation.navigate('Home')
      } else {
        navigation.navigate('LogIn')
      }})
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
    console.log({ username, email, password })
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


// return async function nose (username, email, password ) {
//     try {
//       setLoading(true)
//      // setLoading({ loading: true })
//       const { data } = await axios({
//         method: 'POST',
//         baseURL: 'http://192.168.20.21:8000',
//         url: '/teacher/signup',
//         data : { username, email, password }
//       })
//     } catch (error) {
//       setError({
//         error: error.response.data.message,
//         loading: false
//     })
//    } finally {
//       setLoading(false)
//   } 

//     // // export function registerRoomie(name, lastName, email, password, age, history) {
//     // //   return async function (dispatch) {
//     //    // try {
//     //       const { data } = await axios({
//     //         method: 'POST',
//     //         baseURL: process.env.REACT_APP_SERVER_URL,
//     //         url: '/roomie/signup',
//     //         data: { name, lastName, email, password, age }
//     //       })
//     //       localStorage.setItem("token", data.token);
//     //       dispatch({ type: REGISTER_SUCCESS, payload: data })
//     //       history.push('/')
//     //     } catch (error) {
//     //       dispatch({ type: REGISTER_ERROR, payload: error.message })
//     //     } finally {
//     //       dispatch({ type: REGISTER_FINISHED })
//     //     }
//     //   }
//     // };

//     // function handleSubmit(e) {
//     //   axios({
     
//     //     method: 'POST',
//     //     baseURL: 'http://192.168.20.21:8000',
//     //     url: '/teacher/signup'
//     //   })
//     //     .then(({ data }) => {
//     //       console.log(data)
//     //       setName(username)
//     //       setEmail(email)
//     //       setPassword(password)
//     //     })
//     //     .catch(() => {
//     //       setError(true)
//     //     })
//     //     .finally(() => {
//     //       setLoading(false)
//     //     })

// // EJEMPLO PARA CUANDO SE HAGA EL HANDLE
// // function handleSubmit(e) {
// //   e.preventDefault();
// //   dispatch(updateProfile(profile));
// //   setShow(false);
// // }

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        placeholder="username"
        onChangeText={value => setName(value)}
        value={username}
      />
       <Text>Email</Text>
      <TextInput
        placeholder="example@example.com"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType="email-address"
      />
       <Text>Password</Text>
      <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
      <Button
        title="Create User"
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

