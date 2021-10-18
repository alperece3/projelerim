import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';

const StyledButton= (props) =>{


  const {type,content,onPress} = props;

  const backgroundColor = type === 'primary' ? '#333333' : '#BFBFBF';
  const textColor = type === 'primary' ? '#BFBFBF' : '#333333';

  return(
     <View style={styles.container}>
      <Pressable
       style={[styles.button, {backgroundColor: backgroundColor,opacity: 0.8}]}
      onPress={() => onPress () }
      >
       <Text style={[styles.text, {color:textColor,}]}> {content}</Text>
      </Pressable>
     </View>
  );
};

export default StyledButton;