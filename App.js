
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View,TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const  [text,onChangeText] = React.useState('');     
  const [value,setValue] = useState('');    
  
  const saveValue =()=>{
    if(text){
      AsyncStorage.setItem('data',text);
      onChangeText('');
      alert('Saved');
    }
    else{
      alert('Empty data,please fill');
    }
  }

  const getValue = ()=>{
    AsyncStorage.getItem('data').then((value) => {
      setValue(value); 
    })
  }
  
  return (
    <>
   
    <View style={styles.container}>
   
    <View style = {{flex:2,backgroundColor:'#3d8f7a'}}/>
<SafeAreaView>
  {/* <View style = {{zIndex:1}}/> */} 
  <TextInput
    style= {styles.input}
    onChangeText = {onChangeText}
    value = {text}
    placeholder='Text here'

  />

  <TouchableOpacity
  onPress={saveValue}
  style = {styles.button}
  >

  <Text style = {styles.buttonText} >Submit</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={getValue}
  style = {styles.button}
  >

  <Text style = {styles.buttonText} >Show Entered Values</Text>
</TouchableOpacity>
<Text style= {styles.textStyle}>
  {value}
</Text>

</SafeAreaView>
{/* the below data should appear after adding the names/details to the text input bar -- pending*/} 
{/* <Text style = {styles.text}>
            <Text style = {styles.capitalLetter}>
               Total Amount:{}
            </Text>
              </Text>

              <Text style = {styles.name}>
               Kalam<br />
               <Text>Amount:{}</Text>
            </Text>

              <Text style = {styles.name}>
               Jony<br />
               <Text>Amount:{}</Text>
            </Text>

              <Text style = {styles.name}>
              
               Stephen<br />
               <Text>Amount:{}</Text>
            </Text>
 */}




    <View style = {{flex:3,backgroundColor:'white'}}/>   
    <Feather name="plus" size={24} color="#3d8f7a"  /> 
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding:20,
   flexDirection : 'column',
  },
  input:{
    
    height:40,
    margin:12,
    borderWidth:2,
    padding:10,
    borderRadius:8,
    zIndex:1,
    borderBottomColor: '#3d8f7a',
    borderTopColor: '#3d8f7a',
    borderRightColor: '#3d8f7a',
    borderLeftColor: '#3d8f7a',
  },
  text:{
    color:'#3d8f7a' ,
    textAlign:"center",
    fontWeight: 'bold',
    marginVertical:40 ,
   
    },

    name:{
      fontWeight: 'bold',
      padding:20,
        },

     button:{
      color:'white',
      padding:5,
      marginTop:20,
      fontSize:16
     },
     
     buttonText:{
        color:'white',
        padding:5,
     },
     textStyle:{
      padding:5,
      textAlign:'left',
     }
});
