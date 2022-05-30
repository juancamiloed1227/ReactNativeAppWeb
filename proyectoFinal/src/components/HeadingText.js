import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HeadingText({ titleText }) {
    return (
        <View>
            <Text style={styles.text}>
                {titleText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        letterSpacing: .3,
        fontSize: windowWidth * 0.08,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: windowWidth * 0.05,
        marginBottom: windowWidth * 0.05,
        color: '#5806c4',
    }
})