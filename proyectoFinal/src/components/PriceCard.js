import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Pricecard({ Title, Price, Description, Color, titleColor }) {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: Color,
            width: windowWidth * 0.8,
            height: windowWidth,
            marginLeft: windowWidth * 0.1,
            marginRight: windowWidth * 0.1,
            borderRadius: (windowWidth) * 0.05,
        },
        title: {
            color: titleColor,
            fontSize: 38,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: windowWidth * 0.07,
            marginBottom: windowWidth * 0.01,
        },
        legends: {
            color: '#000000',
            fontSize: 24,
            textAlign: 'center',
            marginBottom: windowWidth * 0.15,
        },
        price: {
            color: '#000000',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 42,
            marginBottom: windowWidth * 0.15,
        },
        Description: {
            fontSize: 16,
            color: '#000000',
            textAlign: 'center',
        }
    });
    
    return (  
        <View style={styles.card}>
            <Text style={styles.title}>{Title}</Text>
            <Text style={styles.legends}>Legends Fest</Text>
            <Text style={styles.price}>{Price}</Text>
            <Text style={styles.Description}>{Description}</Text>
        </View>
    );
}