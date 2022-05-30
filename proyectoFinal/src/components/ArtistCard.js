import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const percentage = 0.55;


export default function ArtistCard ({ sourceImg, name, time }) {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={{uri: sourceImg}}/>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth * percentage,
        paddingLeft: 15,
        marginRight: 30
    }, 
    img : {
        width: windowWidth * percentage,
        height: windowWidth * percentage,
        borderRadius: (windowWidth * percentage) * 0.1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    time: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5,
    }
});