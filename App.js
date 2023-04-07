
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  const  [text,onChangeText] = React.useState('');           
  return (
    <View style={[styles.container,
    {
      flexDirection : 'column',
    },
  ]}>
    <View style = {{flex:1,backgroundColor:'#3d8f7a'}}/>
<SafeAreaView>
  {/* <View style = {{zIndex:1}}/> */}
  <TextInput
    style= {styles.input}
    onChangeText = {onChangeText}
    value = {text}

  />

</SafeAreaView>


    <View style = {{flex:3,backgroundColor:'white'}}/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   padding:20,
  },
  input:{
    height:40,
    margin:12,
    borderWidth:2,
    padding:10,
    borderRadius:8,
    borderBottomColor: '#3d8f7a',
    borderTopColor: '#3d8f7a',
    borderRightColor: '#3d8f7a',
    borderLeftColor: '#3d8f7a',
  },
});
