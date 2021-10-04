import React from 'react';
import {View, ActivityIndicator, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import Http from '../libs/http';
import EpisodeItem from './EpisodeItem'
import EpisodeItemTiny from './EpisodeItemTiny'

class CharacterDetail extends React.Component{

    state={
        loading: false,
        character: null,
        episodes: [],
    }


    componentDidMount = async ()=>{
        this.setState({loading:true});
        const res = await Http.instance.get(this.props.route.params.character_url);
        this.setState({character: res});
        const {character} = this.state 
        if(character){
            let episodes_info = []
            for (let i in character.episode){
                episodes_info.push(await Http.instance.get(character.episode[i]));
            }
            
            this.setState({episodes:episodes_info})
        }
        this.setState({loading:false});
    }
    handleEpisodePress = (episode_url) =>{
        this.props.navigation.navigate('CheckEpisode',{episode_url});
    }

    render(){
        const {character, loading, episodes} = this.state;
        return(
            <View>
                {character?
                    <View style={styles.container}>
                        <Image source={{uri:character.image}}
                        style={styles.image}></Image>
                        <View style={styles.description}>
                            <Text style={styles.text}>Name: {character.name}</Text>
                            <Text style={styles.text}>Gender: {character.gender}</Text>
                            <Text style={styles.text}>Specie: {character.species}</Text>
                            <Text style={styles.text}>Origin Location: {character.origin.name}</Text>
                            <Text style={styles.text}>Current location: {character.location.name}</Text>
                        </View>
                    </View>
                :null
                }
                {loading?
                <ActivityIndicator 
                    color='#lightblue' 
                    size='large'
                    style={styles.loader}
                    >
                </ActivityIndicator >
                :
  <FlatList 
                    data={episodes} 
                    renderItem={
                        ({item}) => {
                            return(
                                <View>
                                    <Pressable onPress={()=>this.handleEpisodePress('https://rickandmortyapi.com/api/episode/'+item.id)}>
                                    <EpisodeItemTiny item={item}>
                                    </EpisodeItemTiny>
                                    </Pressable>
                                </View>
                            );
                        }
                    }>
                </FlatList>
                }                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '50%',
        backgroundColor: '#ADB5BD',
        alignItems:'center'
    },
    description:{
      display: "flex",
        padding:20,
        marginTop:20,
        backgroundColor: '#212529',
        width:'100%'
    },
    loader:{
        marginTop:10,
    },
    image: {
        borderRadius: 12,
        marginTop:20,
        width: '50%',
        height: '50%',
    },
    text:{

        fontSize: 17,
        color: '#E9ECEF'
    }
});
export default CharacterDetail;
