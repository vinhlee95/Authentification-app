import React from 'react';
import {TextInput, View, Text } from 'react-native';

const Input = (props) => {
   const {containerStyle, inputStyle} = styles;
   return(
      <View style = {containerStyle} >
         <TextInput
            secureTextEntry = {props.secureTextEntry}
            autoCorrect = {false}
            style = {inputStyle}
            value = {props.value}
            onChangeText = {props.handleChangeText}
            placeholder = {props.placeholder}
         />
      </View>
   );
};

const styles = {
   containerStyle: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      height: 40,
      marginLeft: 7
   },
   inputStyle: {
      flex: 1,
      fontSize: 18
   }
}

export {Input};