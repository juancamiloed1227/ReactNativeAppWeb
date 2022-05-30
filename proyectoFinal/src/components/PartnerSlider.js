import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Partner from './Partner';

export default function PartnerSlider(props) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.slider}>
            <Partner sourceImg={'https://tecnoempresa.mx/wp-content/uploads/2020/11/rappi-card.png'}/>
            <Partner sourceImg={'https://i.pinimg.com/originals/32/88/34/32883433b1f474130d2d7078b3f9b128.jpg'}/>
            <Partner sourceImg={'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/visa-512.png'}/>
            <Partner sourceImg={'https://media.wired.com/photos/5926dea77034dc5f91bece36/master/w_1600%2Cc_limit/Mastercard3-1.jpg'}/>
            <Partner sourceImg={'https://w7.pngwing.com/pngs/676/74/png-transparent-fast-food-mcdonald-s-logo-golden-arches-restaurant-mcdonalds-mcdonald-s-logo-miscellaneous-food-company.png'}/>
            <Partner sourceImg={'https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png'}/>
            <Partner sourceImg={'https://w7.pngwing.com/pngs/158/639/png-transparent-spotify-streaming-media-logo-playlist-spotify-app-icon-logo-music-download-circle-thumbnail.png'}/>
            <Partner sourceImg={'https://logos-world.net/wp-content/uploads/2021/08/Beats-Electronics-Symbol.png'}/>
            <Partner sourceImg={'https://www.pngplay.com/wp-content/uploads/1/Round-Instagram-Logo-PNG-HD-Quality.png'}/>
            <Partner sourceImg={'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/apple-512.png'}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    slider: {
        flex: 1,
        marginTop: 15,
        marginBottom: 25,
    }
});