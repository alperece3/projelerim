import React from 'react';
import {View, Text, Image,StyleSheet,FlatList} from 'react-native';
import DefaultImage from './rickandmortimage.jpg';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const EpisodeItem = ({item})=>{
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>{}</Text>
                <Image source={{uri: DEFAULT_IMAGE}}
                    style={styles.tinyLogo}></Image>
            </View>
            <View style={styles.row}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.text}>{item.episode}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      
        flexDirection: 'row',
        padding: 16,
        margin:0,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderColor: '#6C757D',
        backgroundColor:'#212529',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 6,
    },
    row:{
        flexDirection:'row',
        textAlign: 'center',
    },
    nameText:{
        color: '#E9ECEF',
        fontSize: 14,
        marginRight: 8,
        fontWeight: 'bold',
    },
    text:{
        color: '#E9ECEF',
        fontSize: 12,

    },
});


export default EpisodeItem;

