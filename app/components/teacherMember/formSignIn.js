import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , Alert, Modal,  Pressable, } from 'react-native';

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisible, setModalVisible] = useState(false);

  function handleSubmit() {    
    console.log({ email, password })
}

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
        }}
      >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
       <Text style={styles.modalText}>Email</Text>
       <TextInput
        placeholder="example@example.com"
        onChangeText={value => setEmail(value)}
        value={email}
        keyboardType="email-address"
      />
      <Text style={styles.modalText}>Password</Text>
       <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
        value={password}
        secureTextEntry
      />
       <Button
        title="Sign In"
        onPress={handleSubmit}
      />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>SigIn</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



// export default function SignIn() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')


//   function handleSubmit() {
//     console.log({ username, email, password })
//   }

//   return (
//     <View style={styles.container}>
//        <Text>Email</Text>
//       <TextInput
//         placeholder="example@example.com"
//         onChangeText={value => setEmail(value)}
//         value={email}
//         keyboardType="email-address"
//       />
//        <Text>password</Text>
//       <TextInput
//         placeholder="password"
//         onChangeText={value => setPassword(value)}
//         value={password}
//         secureTextEntry
//       />
//       <Button
//         title="Sign In"
//         onPress={handleSubmit}
//       />
//     </View>
//   )
// }
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  


