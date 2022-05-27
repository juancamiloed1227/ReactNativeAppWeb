import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


const image = require("../images/title/title.png");
const tipoBoletas = ["Basic Pass Legends Fest", "Full Pass Legends Fest"]


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
        <Text style={styles.tituloT}>Comprar</Text>
      </View>
      <View style={styles.container}>
       
      <View style={[styles.box]}>
          <Text style={styles.tituloT}>Tipo de boleta</Text>
          
        </View>
        <View style={[styles.box]} />
           
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
    color: "black",
    fontSize: 20,
    marginRight: 5,
  },

  title: {
    height: 60,
    width: 200,
    marginLeft: 5,
    padding: 0,
  },

  /*Para el flex*/
  container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    box: {
      height: 200,
      width: 200,

    }
});

