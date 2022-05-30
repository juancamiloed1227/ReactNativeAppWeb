import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;

const startValue = new Animated.Value(1);
const endValue = 1.3;
const duration = 1000;

export default function AnimacionSpotify() {
  useEffect(() => {
    Animated.loop(
      Animated.spring(startValue, {
        toValue: endValue,
        friction: 3,
        useNativeDriver: true,
      }),
      { iterations: 1000 }
    ).start();
  }, [startValue, endValue, startValue]);
  return (
    <View style={{marginBottom: WINDOW_WIDTH * 0.03}}>
      <View style={styles.imgAnimada}>
        <View style={styles.imgAnimada2}>
          <Animated.View
            style={[
              styles.circuloAAnimar,
              {
                transform: [
                  {
                    scale: startValue,
                  },
                ],
              },
            ]}
          >
            <ImageBackground
              style={styles.imagenC}
              resizeMode="contain"
              source={require("../images/anim/spotify.png")}
            ></ImageBackground>
          </Animated.View>
          <Text style={styles.txtimgAnimada}>
            La magia del festival en una playlist
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /*Para animación de spotify*/
  imgAnimada: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    /*linear - gradient(rgb(255, 255, 255) 50%, rgb(36, 200, 93) 50%) */
    /*Arriba IZ DER, Abajo IX DER border-radius:12px 12px 12px 0px; */
  },

  imgAnimada2: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00d167",
    flexDirection: "row",
    /*linear - gradient(rgb(255, 255, 255) 50%, rgb(36, 200, 93) 50%) */
    /*Arriba IZ DER, Abajo IX DER border-radius:12px 12px 12px 0px; */
  },

  txtimgAnimada: {
    textAlign: "right",
    color: "rgb(0, 0, 0)",
    width: "60%",
    fontSize: WINDOW_WIDTH * 0.04,
  },

  imagenC: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
  },

  circuloAAnimar: {
    height: WINDOW_WIDTH / 4,
    width: WINDOW_WIDTH / 4,
    display: "flex",
    justifyContent: "center",
    borderRadius: 800,
    backgroundColor: "white",
    borderWidth: 0,
  },
});
