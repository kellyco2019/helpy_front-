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

export default function ModalUpdateProfile() {
 

  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useState(null);
  const finalRef = useState(null);
  function handleSubmit() {
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
              <Modal.Header>Update Photo Profile</Modal.Header>
              <Modal.Body>
              

      <Text>Pick Photo</Text>
      <Input
        placeholder="Pick your best photo"
        
        
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
          size="sm"
            variant="outline"
            colorScheme="secondary"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            Update Photo
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
