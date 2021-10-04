import React from 'react';
import {View, ActivityIndicator, Text, FlatList, StyleSheet, Image, Pressable, } from 'react-native';
import Http from '../libs/http';
import DefaultImage from './rickandmortimage.jpg';
import CharacterItem from './CharacterItem';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

class EpisodeDetail extends React.Component{

    state={
        loading: false,
        episode: null,
        character: [],
    }

        handleCharacterPress = (character_url) =>{
        this.props.navigation.navigate('CharacterDetail',{character_url});
    }


    componentDidMount = async ()=>{
        this.setState({loading:true});
        const res = await Http.instance.get(this.props.route.params.episode_url);
        this.setState({episode: res});
        const {episode} = this.state 
        if(episode){
            let characters_info = []
            //console.log(character.episode)
            for (let i in episode.characters){
                //console.log(character.episode[i]);
                characters_info.push(await Http.instance.get(episode.characters[i]));
            }
            
            this.setState({characters:characters_info})
        }
        this.setState({loading:false});
    }

    render(){
        const {episode, loading, characters} = this.state;
        return(
            <View>
                {episode?
                    <View style={styles.container}>
                        <Image source={{uri: DEFAULT_IMAGE}}
                        style={styles.image}></Image>
                        <View style={styles.description}>
                            <Text style={styles.text}>Episode Name: {episode.name}</Text>
                            <Text style={styles.text}>Release Date: {episode.air_date}</Text>
                            <Text style={styles.text}>Episode: {episode.episode}</Text>
                        </View>
                    </View>
                :null
                }
                {loading?
                <ActivityIndicator 
                    color='#219ebc' 
                    size='large'
                    style={styles.loader}
                    >
                </ActivityIndicator>
                :
                <FlatList 
                    data={characters} 
                    renderItem={
                        ({item}) => {
                            return(
                                <View>
                                    <Pressable onPress={()=>this.handleCharacterPress('https://rickandmortyapi.com/api/character/'+item.id)}>
                                    <CharacterItem item={item}></CharacterItem>
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
        height: '35%',
        backgroundColor: '#6C757D',
        alignItems:'center'
    },
    description:{
        padding:20,
        marginTop:10,
        backgroundColor: '#212529',
        width:'100%'
    },
    loader:{
        marginTop:10,
    },
    image: {
      borderRadius: 6,
        marginTop:5,
        width: '50%',
        height: '50%',
    },
    text:{
        fontSize: 17,
        color: '#E9ECEF'
    }
});
export default EpisodeDetail;
