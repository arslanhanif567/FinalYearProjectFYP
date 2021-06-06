//import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
//import React
//import React from "@react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { creatematerialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { createMaerialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from './src/Components/Login';
import HomeScreen from './src/Components/Home';

const Stack = createStackNavigator();

const Navigation=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator   >
        <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const App=()=>{

  return(
<Navigation/>

  );

}
export default App;