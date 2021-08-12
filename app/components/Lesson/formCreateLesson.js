import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


export default function CreateLesson() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState()
  //  const [selectedLanguage, setSelectedLanguage] = useState();
    // const [time, setTime] = useState(10)
    //const [photo, setPhoto] = useState('')
    const [terms, setTerms] = useState(false)




    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextInput
                placeholder="title"
                onChangeText={value => setTitle(value)}
                value={title}
            />
            <Text>Description</Text>
            <TextInput
                placeholder="description"
                onChangeText={value => setDescription(value)}
                value={description}
            />
            <Text>Categoryss</Text>
            <Picker
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
            {/* <Picker
                onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                selectedValue={category}
            >
                <Picker.Item label="Meditation" value="meditate" />
                <Picker.Item label="Yoga" value="yoga" />
            </Picker> */}
            <Text>How long is video?</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={10}
                maximumValue={50}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
                // onValueChange={time => setTime(time)}
                // value={time}
            />
            {/* <TextInput
        placeholder="length"
        onChangeText={time => setTime(time)}
        value={time}
        keyboardType="number-pad"
      />
       <TextInput
        placeholder="photo"
        onChangeText={value => setPhoto(value)}
        value={photo}
      />  */}
            <Switch
                onValueChange={value => setTerms(value)}
                value={terms}
            />
            <Button
                title="Create Event"
                onPress={handleSubmit}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

