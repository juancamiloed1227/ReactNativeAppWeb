import React from "react";
import { StyleSheet, Text, ScrollView, Image, Dimensions } from "react-native";
import HeadingText from "../components/HeadingText";
import ArtistSlider from "../components/ArtistSlider";
import ArtistCard from "../components/ArtistCard";
import PlaylistAnimation from "../components/PlaylistAnimation";
import PriceSlider from "../components/PriceSlider";
import PriceCard from "../components/PriceCard";
import PartnerSlider from "../components/PartnerSlider";
import Map from "../components/Map";

const windowWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <ScrollView>
      <Image source={require('../videos/video_fest.gif')} style={{width: windowWidth}}/>
      <Text style={styles.paragraph}>
        El evento que reune a los mejores artista del mundo llega a Cali, preparate para vivir una experiencia única junto a los artistas que conoces y quieres ver.{'\n'}{'\n'}
        Acompañanos el 19 de Junio de 2022, en los alrededores del autocine en el Km 3 Via Cali-Jamundi, activa tu GPS, el recordatorio y no te pierdas el festival.{'\n'}{'\n'}
        - 1 día + 5 artistas{'\n'}
        - Zona de comidas{'\n'}
        - Zona de parqueaderos{'\n'}
        - ¡Mucho Más!
      </Text>
      <Map/>
      <HeadingText titleText='Programación'/>
      <ArtistSlider>
        <ArtistCard sourceImg={'https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj'} name='Bad Bunny' time='7:00 PM'/>
        <ArtistCard sourceImg={'https://upload.wikimedia.org/wikipedia/commons/9/95/Dua_Lipa_with_Warner_Music.jpg'} name='Dua Lipa' time='8:30 PM'/>
        <ArtistCard sourceImg={'https://media.revistagq.com/photos/5ca5f48ff552a14b3632e5ca/master/pass/michael_jackson_856.jpgrj'} name= 'Michael Jackson' time='10:00 PM'/>
        <ArtistCard sourceImg={'https://yt3.ggpht.com/SgTXCaRFjIkfn7P9a0aqH0IZFfplcp3GPBOXYxaY_z1PSfL1_lm4YEZPZN1QppwQ_KxkmDCC=s900-c-k-c0x00ffffff-no-rj'} name='Christian Nodal' time='12:00 AM'/>
        <ArtistCard sourceImg={'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/a/d/e/2ade9bdddbfc84645a4fba007eb031ca.jpg'} name= 'Jesse & Joy' time='1:00 AM'/>
      </ArtistSlider>
      <HeadingText titleText='Precios'/>
      <PriceSlider>
        <PriceCard Title='Basic Pass' Price='$399,900' Description={`Acceso para 1 persona \n \n Ubicación en localidad general`} Color='#eff8ff' titleColor='#48abf7'/>
        <PriceCard Title='Full Pass' Price='$899,900' Description={`Acceso para 1 persona \n \n Ubicación en localidad VIP`} Color='#f8f7e3' titleColor='#fcd44e'/>
      </PriceSlider>
      <HeadingText titleText='Patrocinadores'/>
      <PartnerSlider/>
    </ScrollView>
  );
}
 const styles = StyleSheet.create({ 
    paragraph: {
      paddingLeft: 15,
      paddingRight: 15,
      letterSpacing: .3,
      fontSize: 16,
      textAlign: 'left',
      marginTop: 10,
      marginBottom: 10,
      color: '#000',
    }
 });