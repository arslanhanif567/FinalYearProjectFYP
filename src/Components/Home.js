import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import { Appbar,List } from 'react-native-paper';
//import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
//import { Button } from 'react-native-elements';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import RadioButtonGroup from "react-native-animated-radio-button-group";
//import RadioButton from "react-native-animated-radio-button";
import {YellowBox} from 'react-native';
//YellowBox.ignoreWarnings(['Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`']);
import {MaterialCommunityIcon as Icon} from '@expo/vector-icons';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TextInput,
  Button,
  ListItem,
  LogBox,
  Picker,
  span,
 
  TouchableOpacity,
} from "react-native";
import {
  LineChart,
  BarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  
 
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};



  var radio_props = [
  { label: "OFF",value:0 },
  {  label: "ON",value:1 },
  { label: "AUTO",value:2},
   
];



export default function App(navigation) {
  
 //const[state, setState]= useState({moisturelevel:88,Thersholdvalue:80.0,rain:70,motorstate:'auto'})
 //const moisturelevel//=state.moisturelevel
 const[moisturelevel, setMoisture]=useState("50.0")
 const[Thersholdvalue, setThersholdvalue]=useState("25")
 const[rain, setrain]=useState("23")
 const[motorstate, setmotorstate]=useState("Auto")
 const[maxth, setmaxth]=useState("88")
 const[name,setname]=useState("ORANGE")
 const days=[]
 const level=[]
 const [selectedValue, setSelectedValue] = useState("Weekly")
 //const Thersholdvalue//=state.Thersholdvalue
// const rain=//state.rain
// const motorstate//=state.motorstate
 
 //const [days,setdays]=useState([])
 LogBox.ignoreLogs([
"Animated: useNativeDriver was not specified. This is a required option and must be explicitly set to true or false",
"Setting a timer"
]);
const data = {
  labels:["mon","fhuyg"],
  datasets: [
    {
      data: [29, 45, 28, 80, 91, 43,55],
    
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Moisture Values"] // optional
};

 //const raininfo(rain)
function Radiobuttonpress(value) {
 // console.console.log((value));
 
  //fetch(`http://192.168.10.28/smartagriapi/api/mobile/devicedetail?deviceid=1` )
    
}
//  useEffect(()=>{
   
//    //setdays(JSON.Parse("Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"))
//  // rconsole.log(days);
//   // callapi()
//  })

useEffect(()=>{
      //deviceinfo()
     callapi()
    })
    function deviceinfo() {
      fetch('http://192.168.10.36/smartagriapi/api/mobile/devicedetail?deviceid=1' )
  .then(data=>data.json())
  .then(data2=>{
    console.log(data2)
    var b=data2.Table[0].Next_action
    if(b==0){
      setmotorstate("OFF")
    }
    else if(b==1){
      setmotorstate("ON")
    }
    else{
      setmotorstate("AUTO")
    }
    setMoisture(data2.Table[0].Moisture_value)
     //const console.log(data2.Table[0].Name)
    setrain(data2.Table[0].Rain_precipitation)
    setThersholdvalue(data2.Table[0].Threshold_value)
    setmaxth(data2.Table[0].Max_threshold)
    setname(data2.Table[0].Name)
        //const moisturelevel//=state.moisturelevel
 
    })}

 function callapi() {
    fetch('http://192.168.10.36/smartagriapi/api/mobile/DeviceDataStats?deviceid=1' )
  .then(data=>data.json())
  .then(data2=>{
    //listday[]
    //listmoisture[]
    for(var i=0;i<7;i++)
    {
      days.push((data2.Table[i].DayName).slice(0, 3))
      //console.log(data2.Table[i].DayName)
      level.push(data2.Table[i].Moisturevalue)


    }
    console.log(data2)
    console.log(days)
    console.log(level)

    
    
    //data3:data2
   // console.log(data2.data.Table);
    //
    //
    //
    //


  })
  .catch(err => { console.log(err) })
  
  }


  function myRadiobutton(value) {
     console.log(value);
      fetch(`http://192.168.10.5/smartagriapi/api/mobile/DevicAction?deviceid=1&action=${value}`)
  .then(data=>data.json())
  .then(data2=>{
     console.log(data2)
  var b=data2[8][0]
  if(b === ""){
     alert('Error while turning on motor')
  }
  else{
    if(value===0){
      alert('Action Recorded Motor will be turned OFF in few seconds. ')
    }
    else if(value===1){
    alert('Action Recorded Motor will be turned ON in few seconds. ')
    }
    else{
     alert('Action successfully updated of AutoMode. ')
    }
  }

})


   }
 
 
  return (
   
  <View style={styles.container}>
    <Appbar.Header style={{backgroundColor:"#fff"}}>
  
        <Appbar.Content title="Smart Protection & Preservation"
        style={
         {alignItems:"center"}
        }
         />
  
        </Appbar.Header>
      <StatusBar style="auto" />
    <View style={{  display: 'flex',flexDirection:'row'
    }}>
    <TouchableOpacity  style={styles.orangebtn}>
    <Text style={{fontSize:15,color:"white"}}>ORANGE</Text>
    </TouchableOpacity>

  
  
     </View>
      
      <View style={styles.setting1}>
      
       

  <Text style={{marginLeft:10,fontSize:30,color:"white",textDecorationLine: 'underline' }}>Statistics</Text>
  <LineChart
    data={data}
  
  
  chartConfig={chartConfig}
   // width={Dimensions.get("window").width} // from react-native
   width={340}
    height={210}
    yAxisLabel=""
    yAxisSuffix="%"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
     
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
      
 
 <View style={styles.setting2}>
       <Text style={{marginLeft:10,fontSize:20,color:"white",textDecorationLine: 'underline' }}>Moisture Information</Text>
     <View style={{flexDirection:'row'}}>
      
       <Text style={{margin:10,fontSize:15,color:"white", flexDirection:'row' }}>Current Moisture Level  </Text>
       <Text style={styles.moisturevaluebox}>{moisturelevel}</Text>
     
        </View >
        <View style={{flexDirection:'row'}}>
        <Text style={{margin:10,fontSize:15,color:"white" }}>Thershold Value For Plants </Text>
         <Text style={{marginLeft:30},styles.Thersholdbox}>{Thersholdvalue}</Text>
     
        </View>

        <View style={{flexDirection:'row'}}>
                <Text style={{margin:10, fontSize:15,color:"white" }}>Rain  Precipitation Of Three Days</Text>
               <Text style={styles.rainbox}>{rain}</Text>
     
 </View>
 <View style={{flexDirection:'row'}}>
 
            {{rain}>60?<>
     
         
     
     
         <Text style={{ marginLeft:10, fontSize:15,color:"#0000FF"}}>ALERT! Do not turn on the Pump, In next three days {rain}% chances of rain.</Text>

      
 </>:null
}
  {{moisturelevel}>{Thersholdvalue}?<>
     
         
     
     
         <Text style={{ marginLeft:10, fontSize:15,color:"#0000FF"}}>ALERT! Soil is overmoisturized Plant need Fungus fertilize .</Text>

      
 </>:null}
     
 </View>
 </View>
       
       <View style={styles.setting3}>
       <Text style={{marginLeft:10,fontSize:20,color:"white",textDecorationLine: 'underline' }}>Motor Status</Text>
       
       
     
<Text style={{ marginLeft:30, fontSize:14,color:"white"}}> Currently Motor is in {motorstate} Mode .</Text>

      


<View style={{marginLeft:15,marginTop:5,color:'white'}}>
<RadioForm
labelStyle={{ margin:5, fontSize:15,fontWeight: "bold"}}

radio_props={radio_props}

selectedButtonColor={'green'}
selectedLabelColor={'green'}
initial={2}
formHorizontal={true}
 //labelHorizontal={true}
buttonSize={25}

onPress={(value)=>{myRadiobutton(value)}}

/>
</View>
       </View>
       
             
    
      </View>
    
    
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#fff",
    
  },
  moisturevaluebox:{
   //marginLeft:90,marginTop:5, backgroundColor:"red",fontSize:20,color:"white", height:30
   backgroundColor: '#72a887',
   marginLeft:80,
    fontSize:20,color:"white",
    borderWidth: 2,
    height: 25,
    width: 55,
    fontSize: 18,
    borderRadius: 5,
    marginTop:5,
    paddingLeft: 5,
    borderColor:'#1a2e1a'
   
      },
   Thersholdbox:{
   backgroundColor: '#72a887',
   marginLeft:55,
    fontSize:20,color:"white",
    borderWidth: 2,
    height: 25,
    width: 55,
    fontSize: 18,
    borderRadius: 5,
    marginTop:5,
    paddingLeft: 5,
    borderColor:'#1a2e1a'
  },
   rainbox:{
   backgroundColor: '#72a887',
   marginLeft:20,
    fontSize:20,color:"white",
    borderWidth: 2,
    height: 25,
    width: 55,
    fontSize: 18,
    borderRadius: 5,
    marginTop:5,
    paddingLeft: 5,
    borderColor:'#1a2e1a'
  },
  orangebtn:{
   //backgroundColor: '#72a887',
   backgroundColor: '#228B22',
     width: 100,
      
      alignItems: 'center',
   marginLeft:10,
    
    color:"white",
    borderWidth: 2,
    height: 25,
   
    
    borderRadius: 5,
    marginTop:5,
    paddingLeft: 5,
    borderColor:'#1a2e1a'
  },
  setting1: {
    backgroundColor:'#f58356',
      flex:3,
      marginTop:5,
      margin:10,
      borderRadius:16,
      
    },
    setting2: {
    backgroundColor:'#72a887',
      flex:2,margin:10,
      borderRadius:16,
      
    },
    setting3: {
    backgroundColor:'#a18d78',
      flex:1,margin:10,
      borderRadius:16,
      
    },
  c2:{
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