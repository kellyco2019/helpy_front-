import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSubmit() {
    console.log({ username, email, password })
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
  