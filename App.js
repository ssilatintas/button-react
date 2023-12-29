import React from 'react';
import { 
  StyleSheet,  
  TouchableHighlight, 
  TouchableOpacity, 
  View,
  Button,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

const App=() => {
  const handleClick=() =>{
    alert("Merhaba");
};
  return(
    <View style={StyleSheet.container}>
      <Button title="Click Button" onpress={handleClick}/>
      <TouchableOpacity onpress={handleclick}>
        <Text>Click TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
      activeOpacity={0.8}
      underlayColor="yellow"
      onpress={()=> alert("Pressed!")}
      >
        <Text>Click TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onpress={()=>alert("Pressed!")}>
        <Text>Click TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
     </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
});
