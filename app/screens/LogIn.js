import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import  Register  from '../components/teacherMember/formSignUp';
import  SignIn  from '../components/teacherMember/formSignIn';

export default function LogIn() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
       <Register/>
       <SignIn/>
       <Button>Teacher</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

