import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import ModalCreateLesson from "../components/Lesson/modalCreateLesson";
import ModalUpdatePhotoProfile from "../components/teacherMember/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/teacherMember/modalUpdateProfile";
import ShowProfile from "../components/teacherMember/showProfile";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Button,
  Divider,
  Input,
  Center,
  NativeBaseProvider,
  Heading
} from "native-base";
route = useRoute;
export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     
      <Heading>Member Profile</Heading>
      <View style={styles.fixToText}>
       <View  style={{ margin: 10, flex: 0.5 }}>
         <Button
         size="sm"
         colorScheme="secondary"
        
         onPress={() => navigation.navigate('My Events')} 
         > 
         My Events
         </Button>         
          </View>       
         <View style={{ margin: 10, flex: 0.5 }}>
       

          <Button
          size="sm"
          colorScheme="secondary"
          onPress={() => navigation.navigate("New Event")}
        >
        Create Event
        </Button>
         </View>       
      </View>
      <ShowProfile />
      <ModalUpdateProfile />
      <ModalUpdatePhotoProfile />
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 40
  },

});
