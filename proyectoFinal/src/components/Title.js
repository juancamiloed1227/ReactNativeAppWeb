import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const image = require('../images/title/legendfest.png');

export default function Title() {
  return (
    <View style={styles.header}>
        <Image
            resizeMode="contain"
            source={image}
            style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        width: windowWidth,
        height: windowHeight * 0.1,
        backgroundColor: "rgb(59, 2, 133)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
    image: {
        height: windowHeight * 0.1,
        width: windowWidth * 0.7,
        marginLeft: 5,
        padding: 0,
      },
});