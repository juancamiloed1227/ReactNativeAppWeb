import React from "react";
import { ScrollView } from "react-native";
import ArtistItem from "../components/ArtistItem";

export default function Artists() {
  return (
    <ScrollView>
      <ArtistItem ImageSrc='https://yt3.ggpht.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj' 
                  Name='Bad Bunny' 
                  Description='Artista Puertorriqueño de la musica urbana, reconocido a nivel mundial.'
                  LinkPlaylist='https://open.spotify.com/playlist/37i9dQZF1DX2apWzyECwyZ'/>
      <ArtistItem ImageSrc='https://upload.wikimedia.org/wikipedia/commons/9/95/Dua_Lipa_with_Warner_Music.jpg' 
                  Name='Dua Lipa' 
                  Description='Cantante, compositora, modelo y actriz británica de ascendencia albanokosovar.'
                  LinkPlaylist='https://open.spotify.com/playlist/37i9dQZF1DX3fRquEp6m8D'/>
      <ArtistItem ImageSrc='https://media.revistagq.com/photos/5ca5f48ff552a14b3632e5ca/master/pass/michael_jackson_856.jpgrj' 
                  Name='Michael Jackson' 
                  Description='Cantante, compositor y bailarín estadounidense. Apodado como el Rey del Pop.'
                  LinkPlaylist='https://open.spotify.com/playlist/37i9dQZF1DXaTIN6XNquoW'/>
      <ArtistItem ImageSrc='https://yt3.ggpht.com/SgTXCaRFjIkfn7P9a0aqH0IZFfplcp3GPBOXYxaY_z1PSfL1_lm4YEZPZN1QppwQ_KxkmDCC=s900-c-k-c0x00ffffff-no-rj' 
                  Name='Christian Nodal' 
                  Description='Es un cantante y compositor mexicano. Su primer sencillo, "Adios amor" lanzado en 2016 fue un éxito.'
                  LinkPlaylist='https://open.spotify.com/artist/0XwVARXT135rw8lyw1EeWP'/>
      <ArtistItem ImageSrc='https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/2/a/d/e/2ade9bdddbfc84645a4fba007eb031ca.jpg' 
                  Name='Jesse & Joy' 
                  Description='Dúo de música pop originario de México, formado en 2005 por los hermanos Jesse y Joy Huerta Uecke.'
                  LinkPlaylist='https://open.spotify.com/artist/1mX1TWKpNxDSAH16LgDfiR'/>               
    </ScrollView>
  );
};