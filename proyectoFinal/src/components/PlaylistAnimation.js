import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function PlaylistAnimation() {
    return(
        <View style={styles.image}>
            <Text style={styles.text}>
                La magia del festival en una playlist
            </Text>
            <View style={styles.circle}></View>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: windowWidth,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    text: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 20,
        width: windowWidth * 0.5,
    },
    circle: {
        borderRadius: windowWidth * 0.20,
    },
});