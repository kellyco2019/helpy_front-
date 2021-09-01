import React, { useState } from "react";
import {
  Modal,
  Button,
  Input,
  Text,
  Center,
  Select,
  NativeBaseProvider,
  Slider,
  Stack,
  CheckIcon,
  Box,
} from "native-base";
import { StyleSheet, SafeAreaView, ActivityIndicator } from "react-native";


export default function ModalUpdateLesson() {
 

  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [member, setMember] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState('');
  const [terms, setTerms] = useState(false);
  // const [cameraRollPermission, setCameraRollPermission] = useState('denied')
  // const [cameraPermission, setCameraPermission] = useState(false)
  // const [image, setImage] = useState(null)
  // const [video, setVideo] = useState(null)
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // //const route = useRoute();
  //const navigation = useNavigation();


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
              <Modal.Header>Update Lesson</Modal.Header>
              <Modal.Body>
              <Text>Title</Text>
              <Input
        placeholder="title"
      
      />

      <Text>Description</Text>
      <Input
        placeholder="Describe event"
        
      
      />

    <Text>Member name</Text>
      <Input
        placeholder="change Name"
       
        
      />  
      <Text>Pick One</Text>
         <Select
                selectedValue={category}
                minWidth={200}
                accessibilityLabel="Pick one"
                placeholder="What your event is about"
                onValueChange={(itemValue) => setCategory(itemValue)}
                _selectedItem={{
                  bg: "cyan.600",
                  endIcon: <CheckIcon size={4} />,
                }}
              >
                <Select.Item label="Mindfullness" value="Mindfullness" />
                <Select.Item label="Yoga" value="Yoga" />
                <Select.Item label="Stretching" value="Stretching" />
                <Select.Item label="Gentle" value="Gentle" />
        
              </Select>
            
              {/* <Text>How long is video?</Text>
              <Stack mx={5} space={4} alignItems="center" w="100%">
                <Text>{onChangeValue}</Text>
                <Text>{onChangeEndValue}</Text>
                <Center>
                  <Box mx={5} w="250">
                    <Slider
                      defaultValue={70}
                      colorScheme="cyan"
                      onChange={(v) => {
                        setOnChangeValue(Math.floor(v));
                      }}
                      onChangeEnd={(v) => {
                        v && setOnChangeEndValue(Math.floor(v));
                      }}
                    >
                      <Slider.Track>
                        <Slider.FilledTrack />
                      </Slider.Track>
                      <Slider.Thumb />
                    </Slider>
                  </Box>
                </Center>
              </Stack> */}

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
          variant="outline"
          size="sm"
          colorScheme="secondary"
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            Update Event
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
