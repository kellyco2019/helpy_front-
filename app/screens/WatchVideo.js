import React, { useEffect, useState } from 'react'
import { View,  StatusBar, StyleSheet,  ScrollView } from 'react-native'
import axios from 'axios'
import { useRoute } from '@react-navigation/native'
import { Video, AVPlaybackStatus } from 'expo-av';
import {
    Text,
    Button,
    Divider,
    Input,
    Center,
    NativeBaseProvider,
    Heading
  } from "native-base";
export default function WatchVideo() {
    const [lesson, setLesson] = useState({})

    const route = useRoute()
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    console.log(route.params)

    useEffect(() => {
        axios({
            method: 'GET',
            baseURL: process.env.REACT_APP_SERVER_URL || 'http://192.168.20.21:8000',
            url: `lessons/lesson/${route.params._id}`

        })
            .then(({ data }) => setLesson(data))
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
            <Heading>Enjoy your practice</Heading>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: lesson.video,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                    shouldPlay={false}
                    AVPlaybackStatus
                />
                <View style={styles.buttons}>
                    <Button
                        size="sm"
                        colorScheme="secondary"                     
                        onPress={() =>
                            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        }>
                          {status.isPlaying ? 'Pause' : 'Play'}
                   </Button>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    video: {
        // alignSelf: 'center',
        width: 400,
        height: 300,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});