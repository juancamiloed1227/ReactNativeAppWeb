import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Partner({ sourceImg }) {
    return(
        <View>
            <Image source={{uri: sourceImg}} style={styles.image} />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        width: windowWidth * 0.22,
        height: windowWidth * 0.22,
        borderRadius: windowWidth * 0.22,
        marginRight: 5,
        marginLeft: 15,
    }
});