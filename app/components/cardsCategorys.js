import React from "react";
import { View , TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CardsCategory() {
 
  const navigation = useNavigation()

    function handleSubmitOne() {
      console.log('hola parce')
      navigation.navigate('Category', {
        _category: 'retos'
      })
    }

    function handleSubmitTwo() {
        console.log('que mas?')
        navigation.navigate('Category', {
          _category: 'gente fuerte'
        })
    }

    function handleSubmitTree() {
      console.log('que mas?')
      navigation.navigate('Category', {
        _category: 'gente_triste'
      })
    }

  
  return (
        <View
          style={{
             flexDirection: "row",
            padding: 5
          }}
        >
       
<TouchableOpacity onPress={handleSubmitOne}>
  <View style={{ backgroundColor: "red", width: 80,
            height: 80, margin: 10, flex: 1 }}
            />
</TouchableOpacity>
<TouchableOpacity onPress={handleSubmitTwo}>
          <View style={{ backgroundColor: "green",width: 80,
            height: 80,  margin: 10 ,flex: 1 }} 
            />
</TouchableOpacity>


<TouchableOpacity onPress={handleSubmitTree}>
          <View style={{ backgroundColor: "yellow",width: 80,
            height: 80,  margin: 10 ,flex: 1, }} 
            />
</TouchableOpacity>
          <View style={{ backgroundColor: "blue",width: 70,
            height: 80,  margin: 10 ,flex: 1 }} />
        </View>
       
      );
};
