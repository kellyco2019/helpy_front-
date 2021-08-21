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
      <View style={styles.fixToText}>
       <View  style={{ margin: 10, flex: 0.5 }}>
         <Button
      
         color="#f194ff"
         title="Profile"
         onPress={() => navigation.navigate('Profile' )} 
         />          
          </View>       
         <View style={{ margin: 10, flex: 0.5 }}>
          <Button
          color="#f194ff"
          title="Events"
          onPress={() => navigation.navigate('Events')}/>
         </View>       
      </View>
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
