import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {MaterialCommunityIcon as Icon} from '@expo/vector-icons';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
 const Myfunction=()=>{
  console.log("PRESSED");
  <View>
 <Text>Hello</Text>
  </View>
   
      
     }

class App extends React.Component {
 
  state={
    aa:"sucessfully"
  }
   
  render(){
  return (
    <View style={styles.container}>
     
      <Image style={styles.image} source={require('./assets/logo.jpg')} />
 
      <StatusBar style="auto" />
      <Text>
        {this.state.aa}
      </Text>
      <TextInput
      style={{fontSize:15}}
      placeholder='Name'
      onChangeText={(ttext)=>this.setState({aa:ttext})}

      />
      <Text >{this.state.aa}</Text>
      <Button title="click me" 
      onPress={Myfunction} />
    </View>
    
  );
}}
 export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
 
  forgot_button: {
    height: 30,
    
    marginBottom: 20,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});