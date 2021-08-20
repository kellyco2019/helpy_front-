// import React from 'react'
// import { View, Text, StatusBar, StyleSheet } from 'react-native'
// import ModalCreateComments from '../components/Lesson/modalCreateComments';
// import ShowOneLesson from '../components/Lesson/showOneLesson';
// import { useRoute } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";

// //Modal updateLesson debe renderizara solo cuando tenga toquen
// export default function Lesson() {
//   const route = useRoute()

//  useEffect(() => {
//     ImagePicker.requestMediaLibraryPermissionsAsync().then(({ status }) =>
//       setCameraRollPermission(status)
//     );

//     ImagePicker.requestCameraPermissionsAsync().then(({ status }) =>
//       setCameraPermission(status === "granted")
//     );
//   }, []);

//   async function handlePickImage() {
//     const data = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     if (!data.cancelled) {
//       setImage(data);
//     }
//   }

//   async function handleTakePicture() {
//     const data = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     if (!data.cancelled) {
//       setImage(data);
//     }
//   }

//   async function handleSubmit() {

//     setLoading(true);
//     const token = await AsyncStorage.getItem("token");
//     console.log("soyeltoken", token);
//     axios({
//       method: "POST",
//       baseURL: "http://192.168.20.21:8000",
//       url: '/lessons/teacherProfile/',
//       data: { title, description, category },
//       headers: {
//         Authorization: `token ${token}`,
//       },
//     })


//   }

//   return (
//     <View style={styles.container}>

//       <Text>{route.params._id}</Text>
//       <Text>{route.params.title}</Text>
//       <Text>{route.params.category}</Text>
//       <Text>{route.params.description}</Text>
//       <Button
//       onPress={handleSubmit}
//       >
//       </Button>
//         <View>
             
//                 {cameraPermission ? (
//                   <Button size={10} title="Take a Picture" onPress={handleTakePicture} />
//                 ) : (
//                   <Text>Please allow the app to access camera in your settings</Text>
//                 )}
//                 {cameraRollPermission === "granted" ? (
//                   <Button title="Pick an Image" onPress={handlePickImage} />
                
//                 ) : (
//                   <Text>Please allow the app to access photos in your settings</Text>
//                 )}
//                 {!!image && (
//                   <Image style={styles.image} source={{ uri: image.uri }} />
//                 )}
                
           
//               </View>
    
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
