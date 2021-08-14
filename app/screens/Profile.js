import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import ModalCreateLesson from "../components/Lesson/modalCreateLesson";
import ModalUpdatePhotoProfile from "../components/teacherMember/modalUpdatePhotoProfile";
import ModalUpdateProfile from "../components/teacherMember/modalUpdateProfile";
import ShowProfile from "../components/teacherMember/showProfile";

route = useRoute
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Member Profile</Text>
      <ShowProfile />
      <ModalUpdateProfile/>
      <ModalUpdatePhotoProfile/>
      <ModalCreateLesson/>
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
});
