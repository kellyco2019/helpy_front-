import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function CreateLesson() {
  const [photo, setPhoto] = useState('')

  function handleSubmit() {
    console.log({photo})
  }

  return (
    <View style={styles.container}>
      <Text>Update Photo</Text>
      <TextInput
        placeholder="photo"
        onChangeText={value => setPhoto(value)}
        value={photo}
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
