import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Map() {
    return(
        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <Image source={require('../images/map/mapa.png')}/>
        </View>
    )
};