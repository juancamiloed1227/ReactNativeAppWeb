import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';

import { WebView } from 'react-native-webview';

export default function Spotify() {
    return(
        <WebView source={{ html: '<html><p>Hola desde WebView</p<</html>' }} />
    )
};