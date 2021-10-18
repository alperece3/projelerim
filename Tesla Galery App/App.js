import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {StatusBar} from 'expo-status-bar';

import CarsList from './components/Cars-List';
import MenuNavigator from './components/MenuNavigator';


export default function App() {

  return (
 
    <View style={styles.container}>
        <MenuNavigator/>
        <CarsList/>
        <StatusBar style='auto' hidden={true}/> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
});
