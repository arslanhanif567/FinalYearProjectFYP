import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image
 } from 'react-native';
const submit=(id,password)=>{
  console.log(id,password);
 if(id === "" || password === ""){
        alert('Field Empty')
    }else{
      

      
  fetch(`http://192.168.43.73/smartagriapi/api/mobile/checklogin?login=${id}&pass=${password}`, 
       )
  .then(data=>data.json())
  .then(data2=>{
 
    //console.log(data2)
    //data3:data2
    //console.log(data3);
    //
    //
    //
    //


  })
  .catch(err => { console.log(err) })
  
  }

}
const gitHubUrl = "http://192.168.43.73/smartagriapi/api/mobile/checklogin?login=1&pass=123456"

export default function App({navigation}) {
  
 //const navigation = useNavigation();
   const [id, setId] = useState("");
 
  const [password, setPassword] = useState("");
//   //s
// const [userData, setUserData] = useState({});
// useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

  
//   const getGitHubUserWithFetch = async () => {
//   const response = await fetch(gitHubUrl);
//   const jsonData = await response.json();
//   setUserData(jsonData);
//   console.log(jsonData);
// };


//   //ee

    return (
      <View style={styles.c}>
      <View style={styles.c1}>
 <Appbar.Header style={{backgroundColor:"#458c48"}}>
  
        <Appbar.Content title="Smart Protection & Preservation"
        style={
         {alignItems:"center"}
        }
         />
  
        </Appbar.Header>




      </View>
      
      <View style={styles.c2}>
      <Image  source={require('../assets/logo.jpg')} />
      </View>
      <View style={styles.container}>
       <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(txt => setId(txt))}/>
            
        </View>
          <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(txt => setPassword(txt))}/>
            
        </View>
         <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.loginBtn} 
         onPress={()=> navigation.navigate('Home')  //submit(id,password)//useEffect()
         
        
        
        }
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
      </View>    );
  }


 
const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  c1:{
flex:1


  },
  c:{
    flex:1,
    
    
  },
  c2:{
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
 
  image: {
    marginBottom: 20,
    width:130,
    height:130,
    alignItems: "center",
    justifyContent: "center",
    
  },
 
inputView:{
    width:"80%",
    backgroundColor:"#BFF4F7",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    
  },
 
   inputText:{
    height:50,
    marginLeft:10,
    color:"black",
    fontWeight:"bold",
  },
 
  forgot:{
    color:"black",
    fontSize:15,
    textDecorationLine: 'underline' ,
  },
 signup:{
    color:"green",
    fontSize:15,
    fontWeight:"bold",
  },
loginBtn:{
    width:"80%",
    backgroundColor:"#4D8EC6",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    
  },
});