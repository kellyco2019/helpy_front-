import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function CreateLesson() {
  const [username, setName] = useState('')
  const [email, setEmail] = useState('')
 
  function handleSubmit() {
    console.log({ username, email})
  }

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

      <Button
        title="Update"
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



   
