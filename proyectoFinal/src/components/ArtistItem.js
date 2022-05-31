import React from 'react';
import { StyleSheet,Text, Image, TouchableOpacity, View, Linking, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default function ArtistItem({ ImageSrc, Name, Description, LinkPlaylist }) {
  return (
    <View style={styles.main}>
        <View style={styles.container}>
        <Image style={styles.image} source={{uri: ImageSrc}}/>
        <View style={styles.subcontainer}>
            <Text style={styles.name}>{Name}</Text>
            <Text style={styles.description}>{Description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                Linking.openURL(LinkPlaylist);
            }}>
                <Text style={styles.btnText}>Playlist</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        marginTop: 40,
    },
    container: {
        flexDirection: 'row',
        width: windowWidth * 0.9,
        height: windowWidth * 0.65,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    subcontainer: {
        paddingTop: windowWidth * 0.04,
        paddingLeft: windowWidth * 0.03,
        paddingRight: windowWidth * 0.03,
        width: windowWidth * 0.55,
    },
    image: {
        width: windowWidth * 0.35,
        height: windowWidth * 0.65,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    name: {
        fontSize: windowWidth * 0.05,
        fontWeight: 'bold',
        color: '#5806c4',
        marginBottom: windowWidth * 0.015,
    },
    description: {
        fontSize: windowWidth * 0.03,
        color: '#000',
        marginBottom: windowWidth * 0.05,
    },
    button: {
        backgroundColor: '#5806c4',
        borderRadius: windowWidth * 0.05,
        paddingTop: windowWidth * 0.017,
        paddingBottom: windowWidth * 0.017,
        width: windowWidth * 0.5,
    },
    btnText: {
        color: '#fff',
        fontSize: windowWidth * 0.035,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});