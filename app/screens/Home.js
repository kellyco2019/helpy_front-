import React from 'react'
import { View, Text, StatusBar, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ShowAllLessons from '../components/Lesson/showAllLessons';
import CardsCategory from '../components/cardsCategorys';


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
      <View style={styles.vistaButton}>
      <Button
       style={{ backgroundColor: "green",width: 80,
       height: 80,  margin: 10 ,flex: 1 }} 
        title="Profile"
        onPress={() => navigation.navigate('Profile' , {})}
      />
      <Button
       style={{ margin: 10  }} 
        title="Lessons"
        onPress={() => navigation.navigate('Lessons')}
      />
      </View>
     
      <CardsCategory/>
      <CardsCategory/>
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
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
vistaButton:{
  flexDirection: "row",
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',

},

});
