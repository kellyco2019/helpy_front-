import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function FormComments() {
    // const [title, setTitle] = useState('')
    const [comments, setComments] = useState('')
    // const [category, setCategory] = useState()
    // const [time, setTime] = useState(0)
    //const [photo, setPhoto] = useState('')
    
    function handleSubmit() {
        console.log({ comments })
    }

    return (
        <View style={styles.container}>
           
            <Text>Comments</Text>
            <TextInput
                placeholder="Add your commentes here"
                onChangeText={value => setComments(value)}
                value={comments}
            />
               
            <Button
                title="Add Comment"
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
