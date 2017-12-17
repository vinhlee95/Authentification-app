import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

//destructuring 
const Button = ({onPress, children}) => {
   const {textStyle, buttonStyle} = styles;
   return(
      <TouchableOpacity style={buttonStyle} onPress = {onPress}>
         <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>  
   );
};

const styles = {
   textStyle: {
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '600',
      color: '#007aff',
      paddingTop: 10,
      paddingBottom: 10
   },
   buttonStyle: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
   }
};

export {Button};