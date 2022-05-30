import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

export default function ArtistSlider(props) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.slider}>
            {props.children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        marginTop: 15,
    }
});