import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const Header = (props) => {
  return (
      <View style = {styles.viewStyle} >
          <Text style = {styles.textStyle} >{props.headerText}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
   textStyle: {
      fontSize: 25,
      color: 'red',        
   }
});
export {Header};