import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import StyledButton from '../Styled-Button/index';

const CarItem= (props) =>{

    const { name, tagline, taglineCTA, image} = props.car;

  return(
        <View style={styles.CarContainer}>

          <ImageBackground source={image}
          style={styles.image}/>  

          <View style={styles.titles}>
              <Text style={styles.titlehead}> {name}</Text>
              <Text style={styles.subtitle}>{tagline} {""}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
              </Text>
          </View>

          <View style={styles.buttonsContainer}>
              <StyledButton
               type='primary'
                content={"Custom Order"}
               onPress={() => {
                  console.log("Custom Order Was Press");
               }} />

              <StyledButton
               type='secondary'
                content={"Existing Inventory"}
               onPress={() => {
                  console.log("Existing Inventory Was Press");
               }} />
          </View>
        </View>
  );
};

export default CarItem;