import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Register() {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    console.log({ username, email, password })
  }

// EJEMPLO PARA CUANDO SE HAGA EL HANDLE
// function handleSubmit(e) {
//   e.preventDefault();
//   dispatch(updateProfile(profile));
//   setShow(false);
// }
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
  
