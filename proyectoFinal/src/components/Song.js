import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Linking } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

export default function Song({ Thumbnail, Title, Artist, LinkSong }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: Thumbnail}}/>
            <View style={styles.subcontainer}>
                <Text style={styles.title}>{Title}</Text>
                <Text style={styles.artist}>{Artist}</Text>
            </View>
            <TouchableOpacity style={styles.btnPlay} onPress={() => {
                Linking.openURL(LinkSong);
            }}>
                <Ionicons name="play" size={windowWidth * 0.07} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: windowWidth * 0.025,
        marginLeft: windowWidth * 0.015,
        marginRight: windowWidth * 0.015,
        alignItems: 'center',
    },
    subcontainer: {
        marginLeft: windowWidth * 0.02,
    },
    image: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
    },
    title: {
        fontSize: windowWidth * 0.045,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: windowWidth * 0.005,
    },
    artist: {
        color: '#fff',
        fontSize: windowWidth * 0.03,
    },
    btnPlay: {
        backgroundColor: '#1db954',
        width: windowWidth * 0.12,
        height: windowWidth * 0.12,
        borderRadius: windowWidth * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: windowWidth * 0.02,
    }
});