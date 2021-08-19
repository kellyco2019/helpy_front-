import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Button,
  Input,
  Text,
  Center,
  NativeBaseProvider,
  Select,
  Slider,
  Stack,
  CheckIcon,
  Box,
} from "native-base";
import {
  View,
  TextInput,
  Switch,
  SafeAreaView,
  ActivityIndicator,
  Image,
  StyleSheet
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function ModalCreateLesson() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [onChangeValue, setOnChangeValue] = useState(10);
  const [onChangeEndValue, setOnChangeEndValue] = useState(20);
  const [terms, setTerms] = useState(false);
  const [cameraRollPermission, setCameraRollPermission] = useState("denied");
  const [cameraPermission, setCameraPermission] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const initialRef = useState(null);
  const finalRef = useState(null);

  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync().then(({ status }) =>
      setCameraRollPermission(status)
    );

    ImagePicker.requestCameraPermissionsAsync().then(({ status }) =>
      setCameraPermission(status === "granted")
    );
  }, []);

  async function handlePickImage() {
    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!data.cancelled) {
      setImage(data);
    }
  }

  async function handleTakePicture() {
    const data = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!data.cancelled) {
      setImage(data);
    }
  }

  async function handleSubmit() {
    setLoading(true);
    const token = await AsyncStorage.getItem("token");
    console.log("soyeltoken", token);
    axios({
      method: "POST",
      baseURL: "http://192.168.20.21:8000",
      url: "/lessons/teacherProfile/",
      data: { title, description, category },
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then(({ data }) => {
        console.log(data);
        navigation.navigate("Lesson", {
          _id: data._id,
          title: data.title,
        });
      })
      .catch((e) => {
        setError(true);
        console.log(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
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
        <Text>Try Later</Text>
      </SafeAreaView>
    );
  }

  return (
    <NativeBaseProvider>
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
            <Modal.Header>Describe your event</Modal.Header>
            <Modal.Body>
              <Text>Title</Text>
              <Input
                placeholder="title"
                onChangeText={(value) => setTitle(value)}
                value={title}
              />
              <Text>Description</Text>
              <Input
                placeholder="description"
                onChangeText={(value) => setDescription(value)}
                value={description}
              />
              <Text>Category</Text>

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
                <Select.Item label="Mindfullness" value="mf" />
                <Select.Item label="Yoga" value="yo" />
                <Select.Item label="Stretching" value="st" />
                <Select.Item label="Gentle" value="gt" />
        
              </Select>
              <Stack space={5} alignItems="center">
             
                {cameraPermission ? (
                  <Button size={10} title="Take a Picture" onPress={handleTakePicture} />
                ) : (
                  <Text>Please allow the app to access camera in your settings</Text>
                )}
                {cameraRollPermission === "granted" ? (
                  <Button title="Pick an Image" onPress={handlePickImage} />
                
                ) : (
                  <Text>Please allow the app to access photos in your settings</Text>
                )}
                {!!image && (
                  <Image style={styles.image} source={{ uri: image.uri }} />
                )}
                
           
              </Stack>
              <Text>How long is video?</Text>
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
              </Stack>
              <Switch onValueChange={(value) => setTerms(value)} value={terms} />
            </Modal.Body>
            <Modal.Footer>
              <Button.Group variant="ghost" space={2}>


           
                <Button onPress={handleSubmit}>CREATE EVENT</Button>
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
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          Create Event
        </Button>
      </Center>
    </NativeBaseProvider>
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
