import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Switch,
  SafeAreaView,
  ActivityIndicator,
  Image
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Select,
  Slider,
  Stack,
  CheckIcon,
  Center,
  Box,
  NativeBaseProvider,
} from "native-base";
import * as ImagePicker from "expo-image-picker";

export default function CreateLesson() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [onChangeValue, setOnChangeValue] = useState(70);
  const [onChangeEndValue, setOnChangeEndValue] = useState(70);
  const [terms, setTerms] = useState(false);
  const [cameraRollPermission, setCameraRollPermission] = useState("denied");
  const [cameraPermission, setCameraPermission] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <Text>Title</Text>
      <TextInput
        placeholder="title"
        onChangeText={(value) => setTitle(value)}
        value={title}
      />
      <Text>Description</Text>
      <TextInput
        placeholder="description"
        onChangeText={(value) => setDescription(value)}
        value={description}
      />
      <Text>Category</Text>
      <NativeBaseProvider>
        <Select
          selectedValue={category}
          minWidth={200}
          accessibilityLabel="Select your favorite programming language"
          placeholder="Select your favorite programming language"
          onValueChange={(itemValue) => setCategory(itemValue)}
          _selectedItem={{
            bg: "cyan.600",
            endIcon: <CheckIcon size={4} />,
          }}
        >
          <Select.Item label="JavaScript" value="js" />
          <Select.Item label="TypeScript" value="ts" />
          <Select.Item label="C" value="c" />
          <Select.Item label="Python" value="py" />
          <Select.Item label="Java" value="java" />
        </Select>

        <View style={styles.container}>
          {cameraPermission ? (
            <Button title="Take a Picture" onPress={handleTakePicture} />
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
          <StatusBar style="auto" />
        </View>
        <Text>How long is video?</Text>
        <Stack mx={5} space={4} alignItems="center" w="100%">
          <Text>onChangeValue - {onChangeValue}</Text>
          <Text>onChangeEndValue - {onChangeEndValue}</Text>
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
        <Button title="Create Event" onPress={handleSubmit} />
      </NativeBaseProvider>

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
  image: {
    width: 250,
    height: 300,
  },
});
