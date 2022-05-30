import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

export default function PriceSlider(props) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} pagingEnabled={true} style={styles.slider}>
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