import React from "react";
import { StyleSheet, Text, ScrollView, Image, Dimensions } from "react-native";
import HeadingText from "../components/HeadingText";
import ArtistSlider from "../components/ArtistSlider";
import ArtistCard from "../components/ArtistCard";
import PriceSlider from "../components/PriceSlider";
import PriceCard from "../components/PriceCard";
import PartnerSlider from "../components/PartnerSlider";
import Map from "../components/Map";
import Song from "../components/Song";
import AnimacionSpotify from "../components/AnimacionSpotify";

const windowWidth = Dimensions.get("window").width;

export default function Home() {
  return (
    <ScrollView>
      <Image
        source={require("../videos/video_fest.gif")}
        style={{ width: windowWidth }}
      />
      <Text style={styles.paragraph}>
        El evento que reune a los mejores artistas del mundo llega a Cali,
        prepárate para vivir una experiencia única junto a los artistas que
        conoces y quieres ver.{"\n"}
        {"\n"}
        Acompáñanos el 19 de Junio de 2022, en los alrededores del autocine en
        el Km 3 Via Cali-Jamundi, activa tu GPS, el recordatorio y no te pierdas
        el festival.{"\n"}
        {"\n"}- 1 día + 5 artistas{"\n"}- Zona de comidas{"\n"}- Zona de
        parqueaderos{"\n"}- ¡Mucho Más!
      </Text>
      <Map />
      <HeadingText titleText="Programación" />
      <ArtistSlider>
        <ArtistCard
          sourceImg={
            "https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj"
          }
          name="Bad Bunny"
          time="7:00 PM"
        />
        <ArtistCard
          sourceImg={
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Dua_Lipa_with_Warner_Music.jpg"
          }
          name="Dua Lipa"
          time="8:30 PM"
        />
        <ArtistCard
          sourceImg={
            "https://media.revistagq.com/photos/5ca5f48ff552a14b3632e5ca/master/pass/michael_jackson_856.jpgrj"
          }
          name="Michael Jackson"
          time="10:00 PM"
        />
        <ArtistCard
          sourceImg={
            "https://yt3.ggpht.com/SgTXCaRFjIkfn7P9a0aqH0IZFfplcp3GPBOXYxaY_z1PSfL1_lm4YEZPZN1QppwQ_KxkmDCC=s900-c-k-c0x00ffffff-no-rj"
          }
          name="Christian Nodal"
          time="12:00 AM"
        />
        <ArtistCard
          sourceImg={
            "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/a/d/e/2ade9bdddbfc84645a4fba007eb031ca.jpg"
          }
          name="Jesse & Joy"
          time="1:00 AM"
        />
      </ArtistSlider>
      <HeadingText titleText="Playlist" />
      <AnimacionSpotify />
      <Song
        Thumbnail="https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72"
        Title="Moscow Mule"
        Artist="Bad Bunny"
        LinkSong="https://open.spotify.com/track/6Xom58OOXk2SoU711L2IXO?si=5ed3392be93e4dbb"
      />
      <Song
        Thumbnail="https://i.scdn.co/image/ab67616d0000b273d4daf28d55fe4197ede848be"
        Title="Levitating"
        Artist="Dua Lipa"
        LinkSong="https://open.spotify.com/track/5nujrmhLynf4yMoMtj8AQF?si=ab06194646534509"
      />
      <Song
        Thumbnail="https://i.scdn.co/image/ab67616d0000b2734121faee8df82c526cbab2be"
        Title="Thriller"
        Artist="Michael Jackson"
        LinkSong="https://open.spotify.com/track/3S2R0EVwBSAVMd5UMgKTL0?si=30bb778a00df4126"
      />
      <Song
        Thumbnail="https://i.scdn.co/image/ab67616d0000b2731f5a61ca13f18ac48efcd1ae"
        Title="Adios Amor"
        Artist="Christian Nodal"
        LinkSong="https://open.spotify.com/track/63bmZnBN1CiJ9sA4qTEe8y?si=8a37842e4a8c4548"
      />
      <Song
        Thumbnail="https://i.scdn.co/image/ab67616d0000b273f8b0b8e193b9938bdd41c5c7"
        Title="¡Corre!"
        Artist="Jesse & Joy"
        LinkSong="https://open.spotify.com/track/5kIcrM3QVD4BQPFMszQnU1?si=a8c8284bd3604276"
      />
      <HeadingText titleText="Precios" />
      <PriceSlider>
        <PriceCard
          Title="Basic Pass"
          Price="$399,900"
          Description={`Acceso para 1 persona \n \n Ubicación en localidad general`}
          Color="#eff8ff"
          titleColor="#48abf7"
        />
        <PriceCard
          Title="Full Pass"
          Price="$899,900"
          Description={`Acceso para 1 persona \n \n Ubicación en localidad VIP`}
          Color="#f8f7e3"
          titleColor="#fcd44e"
        />
      </PriceSlider>
      <HeadingText titleText="Patrocinadores" />
      <PartnerSlider />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    paddingLeft: 15,
    paddingRight: 15,
    letterSpacing: 0.3,
    fontSize: 16,
    textAlign: "left",
    marginTop: 10,
    marginBottom: 10,
    color: "#000",
  },
});
