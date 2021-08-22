import React from 'react'
import { View, StatusBar, StyleSheet,  } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ShowAllLessons from '../components/Lesson/showAllLessons';
import CardsCategory from '../components/cardsCategorys';
import {
  Modal,
  Button,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
// export default function Home({ navigation }) {
export default function Home() {
  const navigation = useNavigation()

  return (
   
    <View style={styles.container}>
      <View style={styles.fixToText}>
       <View  style={{ margin: 10, flex: 0.5 }}>
         <Button
        size="sm"
        colorScheme="secondary"
        
         title="Profile"
         onPress={() => navigation.navigate('Profile' )} >
          Profile
         </Button> 
                 
          </View>       
         <View style={{ margin: 10, flex: 0.5 }}>
          <Button
          size="sm"
          colorScheme="secondary"
          
          title="Events"
          onPress={() => navigation.navigate('Events')}>
            Events
           </Button> 
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
