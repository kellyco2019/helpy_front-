import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { marginBottom } from "styled-system";

export default function CardsCategory() {

  const navigation = useNavigation()

  function handleSubmitOne() {
    
    navigation.navigate('Category', {
      _category: 'Mindfullness'
    })
  }

  function handleSubmitTwo() {
   
    navigation.navigate('Category', {
      _category: 'Yoga'
    })
  }

  function handleSubmitTree() {
  
    navigation.navigate('Category', {
      _category: 'Stretching'
    })
  }


  function handleSubmitFour() {
  
    navigation.navigate('Category', {
      _category: 'Gentle'
    })
  }

  return (
    <View
      style={{
        flexDirection: "row",
        padding: 5,
        marginBottom: 30
      }}
    >
      <TouchableOpacity onPress={handleSubmitOne}>
       
          <Image
            style={{
              width: 80,
              height: 80,
              margin: 10,

            }} 
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629329188/Helpy/38_f11fmq.png',
            }}
          />
     
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmitTwo}>
     
          <Image
            style={{
              width: 80,
              height: 80,
              margin: 10,
            }}
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629329188/Helpy/36_j8yaxy.png',
            }}
          />
       
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSubmitTree}>
       
          <Image
            style={{
              width: 80,
              height: 80,
              margin: 10,
            }}
            source={{
              uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629329188/Helpy/37_aydsf9.png',
            }}
          />
       
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmitFour}>
      
        <Image
          style={{
            width: 80,
            height: 80,
            margin: 10,
          }}
          source={{
            uri: 'https://res.cloudinary.com/evollve-sas/image/upload/v1629329188/Helpy/35_d9lta8.png',
          }}
        />
     
      </TouchableOpacity>
    </View>

  );
};
