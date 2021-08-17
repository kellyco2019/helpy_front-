import React from 'react'
import { View, Text, StatusBar, StyleSheet, Button, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ShowAllLessons from '../components/Lesson/showAllLessons';
import CardsCategory from '../components/cardsCategorys';


// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()

  return (
   
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.fixToText}>
       <View  
          style={{ backgroundColor: "red",
            margin: 10, flex: 0.5 }}>
         <Button
         title="Profile"
         onPress={() => navigation.navigate('Profile' )} 
         />   
         
          </View>       
         <View style={{ backgroundColor: "red",
            margin: 10, flex: 0.5 }}>
          <Button
          title="Lesson"
          onPress={() => navigation.navigate('Lessons')}/>
         </View>       
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
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 40
  },

});
