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
        flexDirection: 'column',
        padding: 16,
        margin:1,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        backgroundColor:'#6C757D',
        alignItems: 'center',
    },
    tinyLogo: {
        width: 200,
        height: 200,
        borderRadius: 24,
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

