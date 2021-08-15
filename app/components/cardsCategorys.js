import React from "react";
import { Pressable, View , TouchableHighlight, TouchableOpacity } from "react-native";

export default function CardsCategory() {

    function handleSubmitOne() {
        console.log('hola mundo')
    }

    function handleSubmitTwo() {
        console.log('que mas?')
    }

    function handleSubmitTree() {
        console.log('soy cora')
    }

    // function handleSubmitFour() {
    //     console.log('soy cora')
    //}
  return (
        <View
          style={{
             flexDirection: "row",
            // width: 250,
            // height: 250,
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
