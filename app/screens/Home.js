import React from 'react'
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ShowAllLessons from '../components/Lesson/showAllLessons';

// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      {/* <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      /> */}
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile' , {})}
      />
       <Button
        title="Go to Lessons"
        onPress={() => navigation.navigate('Lessons')}
      />
      <ShowAllLessons/>
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
