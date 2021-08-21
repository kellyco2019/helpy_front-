import { useRoute } from "@react-navigation/native";
import React from "react";
import { Button, View, Text, StatusBar, StyleSheet } from "react-native";
import ModalCreateLesson from "../components/Lesson/modalCreateLesson";
import ModalUpdatePhotoProfile from "../components/teacherMember/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/teacherMember/modalUpdateProfile";
import ShowProfile from "../components/teacherMember/showProfile";
import { useNavigation } from "@react-navigation/native";

route = useRoute;
export default function Profile() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Member Profile</Text>
      <View style={styles.fixToText}>
       <View  style={{ margin: 10, flex: 0.5 }}>
         <Button
         color="#f194ff"  
         title="My Events"
         onPress={() => navigation.navigate('My Events')} 
         />          
          </View>       
         <View style={{ margin: 10, flex: 0.5 }}>
          <Button
          color="#f194ff"
           title="Create Event"
          onPress={() => navigation.navigate("New Event")}/>
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
