import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
        fontFamily: 'sans-serif',
        letterSpacing: .3,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
    }
})