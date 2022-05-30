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
        letterSpacing: .3,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 15,
        color: '#5806c4',
    }
})