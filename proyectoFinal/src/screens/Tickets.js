import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import NumericInput from "react-native-numeric-input";

const tipoBoletas = ["Basic Pass Legends Fest", "Full Pass Legends Fest"];
const windowWidth = Dimensions.get("window").width;
export default function Tickets() {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        <Text style={styles.tituloT}>Tipo de boleta</Text>
        <View style={styles.contenedor1}>
          <View style={styles.contenedor2}>
            <View style={styles.contenedorImgTx}>
              <Image
                style={styles.imgBoleta}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/3702/3702886.png",
                }}
              />
              <Text style={styles.titulo}>Basic Pass Legends Fest</Text>
            </View>
            <NumericInput
              type="up-down"
              onChange={(value) => console.log(value)}
              totalWidth={100}
              iconStyle={{ color: "#240252" }}
              minValue={0}
              style={styles.numericInput}
            />
          </View>

          <View style={styles.contenedor2}>
            <View style={styles.contenedorImgTx}>
              <Image
                style={styles.imgBoleta}
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/1061/1061702.png",
                }}
              />
              <Text style={styles.titulo}>Full Pass Legends Fest </Text>
            </View>
            <NumericInput
              type="up-down"
              onChange={(value) => console.log(value)}
              totalWidth={100}
              iconStyle={{ color: "#240252" }}
              minValue={0}
              style={styles.numericInput}
            />
          </View>
        </View>

        <View style={styles.contenedorBoton}>
          <TouchableOpacity
            onPress={() => Alert.alert("Se calculó el total de la compra")}
          >
            <Text style={styles.textoBoton}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorResumen}>
          <Text style={styles.tituloResumen}>Resumen de la compra</Text>
          <View style={styles.contenedorinfoResumen}>
            <View style={styles.contenedorinfoBoleta}>
              <View style={styles.contenedorimgBoleta2}>
                <Image
                  resizeMode="contain"
                  style={styles.imgBoleta2}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3702/3702886.png",
                  }}
                />
              </View>
              <Text style={styles.nombreBoleta}>Basic Pass Legends Fest</Text>
              <Text style={styles.nombreBoleta2}>$</Text>
              <Text style={styles.nombreBoleta3}>Cantidad:</Text>
            </View>

            <View style={styles.contenedorinfoBoleta}>
              <View style={styles.contenedorimgBoleta2}>
                <Image
                  resizeMode="contain"
                  style={styles.imgBoleta2}
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/1061/1061702.png",
                  }}
                />
              </View>
              <Text style={styles.nombreBoleta}>Full Pass Legends Fest </Text>
              <Text style={styles.nombreBoleta2}>$</Text>
              <Text style={styles.nombreBoleta3}>Cantidad:</Text>
            </View>
          </View>
        </View>

        <View style={styles.contenedorBoton2}>
          <TouchableOpacity
            onPress={() => Alert.alert("La compra se ha realizado con éxito")}
          >
            <Text style={styles.textoBoton}>Comprar ahora</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.contenedorTyC}>
          <Text style={styles.textoTyC}>Términos y condiciones</Text>
          <Text style={styles.textoTyC}>
            Copyright&copy; Legends Fest - 2022
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,

    alignItems: "center",
  },
  contenedor1: {
    backgroundColor: "#B277FF",
    padding: 10,
    width: "100%",
    marginLeft: 10,
    marginRight: 10,
    height: 200,
  },

  contenedorImgTx: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  numericInput: {
    width: "40%",
  },

  imgBoleta: {
    width: 30,
    height: 30,
  },

  imgBoleta2: {
    width: "100%",
    height: "100%",
  },

  contenedor2: {
    flexDirection: "row",
    backgroundColor: "#8143D1",
    width: "100%",
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    padding: 6.5,
    marginLeft: 3.2,
    justifyContent: "space-between",
    marginBottom: 10,
  },

  tituloT: {
    color: "#240252",
    fontSize: 20,
    marginRight: 5,
    marginBottom: 12,
  },

  contenedorBoton: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#3B0285",
    width: windowWidth / 2.5,
    borderRadius: 10,
  },

  contenedorBoton2: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#3B0285",
    width: windowWidth / 2,
    borderRadius: 10,
  },

  textoBoton: {
    padding: 10,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    width: "100%",
  },

  contenedorResumen: {
    backgroundColor: "#8143D1",
    borderRadius: 10,
    padding: 15,
    width: windowWidth - 10,
    height: 300,
    display: "flex",
    alignItems: "center",
  },

  tituloResumen: {
    color: "white",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    height: "20%",
  },

  contenedorinfoResumen: {
    flexDirection: "column",
    width: "100%",
    height: "80%",

    alignItems: "center",
    justifyContent: "center",
  },

  contenedorinfoBoleta: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "50%",
  },

  nombreBoleta: {
    color: "white",
    fontSize: 13,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    width: "40%",
  },

  nombreBoleta2: {
    color: "white",
    fontSize: 13,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    width: "10%",
  },

  nombreBoleta3: {
    color: "white",
    fontSize: 13,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    width: "30%",
  },

  contenedorimgBoleta2: {
    height: "100%",
    width: "20%",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    padding: "5%",
  },

  titulo: {
    color: "white",
    fontSize: 15,
    marginRight: 5,
    padding: 10,
  },

  contenedorTyC: {
    backgroundColor: "#B277FF",
    padding: 15,
    width: windowWidth,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textoTyC: {
    alignContent: "center",
    justifyContent: "center",
    color: "#240252",
    fontSize: 11,
  },
});
