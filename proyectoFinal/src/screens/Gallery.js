import React from "react";
import { render } from "react-dom";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = require("../images/title/title.png");
export default function Gallery() {
  return (
    <View>
      {/* Header*/}
      <View style={styles.header}>
        <View style={styles.title}>
          <ImageBackground
            resizeMode="contain"
            source={image}
            style={styles.title}
          ></ImageBackground>
        </View>
        <Text style={styles.tituloT}>Gallery</Text>
      </View>

      <View style={styles.contenedorGaleria}>
        <ImageBackground
          source={{
            uri: "https://media.resources.festicket.com/www/magazine/Coachella22Lineup_L.jpg",
          }}
          style={styles.imagenC}
        >
          <Text style={styles.tituloIMG}>tituloImg</Text>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: 360,
    height: 60,
    backgroundColor: "rgb(59, 2, 133)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  separadorH: {
    width: 0.1,
  },

  tituloT: {
    color: "white",
    fontSize: 20,
    marginRight: 5,
  },

  title: {
    height: 60,
    width: 200,
    marginLeft: 5,
    padding: 0,
  },

  imagenC: {
    backgroundColor: "blue",
    height: 108,
    width: 118,
    margin: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  contenedorGaleria: {
    display: "flex",
    flexDirection: "row",
    height: 300,
    width: 118,
  },

  tituloIMG: {
    width: 118,
    height: 25,
    backgroundColor: "black",
    opacity: 0.6,
    color: "white",
    textAlign: "right",
  },

  img: {
    width: 118,
    height: 98,
    backgroundColor: "yellow",
  },
});
