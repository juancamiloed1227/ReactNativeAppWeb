import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../images/title/title.png");

export default function Artists() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.title}>
          <ImageBackground
            resizeMode="contain"
            source={image}
            style={styles.title}
          ></ImageBackground>
        </View>
        <Text style={styles.tituloT}>Artists</Text>
      </View>
      <View>
        <Text>Artistssss</Text>
        <Text>Aristddd</Text>
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
});
