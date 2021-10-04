import React from 'react';
import Episode from './Episode'
import EpisodeDetail from './EpisodeDetail'
import CharacterDetail from './CharacterDetail'
import CheckEpisode from './CheckEpisode'
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();


class MainScreen extends React.Component{
    render(){
        return(
            <Stack.Navigator
            screenOptions = {{
              background: 'black',
                headerStyle:{
                    backgroundColor: '#212529',
                },
                headerTintColor: '#E9ECEF',
            }}
            >
            <Stack.Screen name='Episode' 
            component={Episode}></Stack.Screen>
            <Stack.Screen name='EpisodeDetail' 
            component={EpisodeDetail}></Stack.Screen>
            <Stack.Screen name='CharacterDetail' 
            component={CharacterDetail}></Stack.Screen>
            <Stack.Screen name='CheckEpisode' 
            component={CheckEpisode}></Stack.Screen>
            </Stack.Navigator>
        );
    }
}

export default MainScreen;
