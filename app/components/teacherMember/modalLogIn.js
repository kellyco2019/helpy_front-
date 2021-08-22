import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  Text,
  Center,
  NativeBaseProvider,
} from "native-base";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function ModalLogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useState(null);
  const finalRef = useState(null);
  function handleSubmit() {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem("token", value);
        const token = await AsyncStorage.getItem("token");
        console.log("token", token);
      } catch (error) {
        console.log(error);
      }
    };

    setLoading(true);
    axios({
      method: "POST",
      baseURL: "http://192.168.20.21:8000",
      url: "/teacher/signin",
      data: { email, password },
    })
      .then(({ data }) => {
        console.log(data);
        //poner condicionalde saber que si tiene
        //token lo dirija a la parte de lessons sino no
        // lo deje ir a la parte de lessons
        if (data.token) {
          storeData(data.token);
          navigation.navigate("Home");
        } else {
          navigation.navigate("LogIn");
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        setModalVisible(!modalVisible);
      });
    console.log({ email, password });
  }
  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>oopp! Email or Password Invalid!</Text>
      </SafeAreaView>
    );
  }

  return (
   
        <Center flex={1}>
          <Modal
            size="lg"
            isOpen={modalVisible}
            onClose={setModalVisible}
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Sign In</Modal.Header>
              <Modal.Body>
                <Text>Email</Text>
                <Input
                  placeholder="example@example.com"
                  onChangeText={(value) => setEmail(value)}
                  value={email}
                  keyboardType="email-address"
                />
                <Text>Password</Text>
                <Input
                  placeholder="Password"
                  onChangeText={(value) => setPassword(value)}
                  value={password}
                  secureTextEntry
                />
              </Modal.Body>
              <Modal.Footer>
                <Button.Group variant="ghost" space={2}>
                  <Button onPress={handleSubmit}>SEND</Button>
                  <Button

                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                    colorScheme="secondary"
                  >
                    CLOSE
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
          <Button
          size="md"
          colorScheme="secondary"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            Sign In
          </Button>
        </Center>

  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
