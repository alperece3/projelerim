import * as React from 'react';
import { Text, View, StyleSheet,  } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native'
import MainScreen from './src/components/MainScreen'




const App = () => {
      <View style={{backgroundColor: 'black'}}></View>
  return (
    <NavigationContainer>
      <MainScreen></MainScreen>
    </NavigationContainer>
  );
};



export default App;