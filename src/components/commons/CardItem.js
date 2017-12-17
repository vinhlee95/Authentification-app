import React from 'react';
import {View} from 'react-native';

const CardItem = (props) => {
   return(
      <View style={styles.viewStyle}>
         {props.children}
      </View>
   );
};

const styles = {
   viewStyle: {
      borderBottomWidth: 1,
      borderColor: '#ddd',
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
   }
};

export {CardItem};