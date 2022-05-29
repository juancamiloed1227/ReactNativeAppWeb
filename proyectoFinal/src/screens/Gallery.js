import React from "react";
import { render } from "react-dom";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Lightbox from "react-native-lightbox-v2";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;
const BASE_PADDING = 10;
const image = require("../images/title/title.png");
export default function Gallery() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://www.soundpark.news/__export/1606332008243/sites/debate/img/2020/11/25/bad_bunny_especiallll_crop1606331722978.jpg_1867988233.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Bad Bunny</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://www.rockandpop.cl/wp-content/uploads/2020/03/10virus-coachella1-mediumSquareAt3X.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Colors</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://media.glamour.es/photos/616fabe01c489cc5b47fdaf5/master/pass/574212.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Happy</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://static01.nyt.com/images/2022/01/15/multimedia/06coachella/06coachella-mediumSquareAt3X.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Billie Eilish</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://static01.nyt.com/images/2022/04/15/arts/14live-coachella1/14live-coachella1-mediumSquareAt3X.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Public</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://media.glamour.es/photos/616fa5784c80b3faad2cbcbb/master/pass/586729.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Harry Styles</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://media.glamour.es/photos/616fa6b87dc5777c054d5c5a/master/pass/581945.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Friends</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://www.random.news/__export/1653609527992/sites/debate/img/2022/05/26/christian_nodal_foto_afp.png_1774227703.png",
                  }}
                >
                  <Text style={styles.tituloIMG}>Christian Nodal</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://static01.nyt.com/images/2020/03/18/arts/18VIRUS-GLASTONBURY/merlin_170666754_6ed3b665-9823-4a40-9d0b-081fe9f7659e-mediumSquareAt3X.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>One World</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://fever.imgix.net/filter/photo/ea587380-cb91-11ec-98e0-deae2dd1fe00.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Dark</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://media.glamour.es/photos/616f9ee8b879fa0d08e7298f/master/pass/599331.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Dua Lipa</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://d5ufkx8libmbn.cloudfront.net/wp-content/uploads/sites/22/2021/11/09142744/Friday_Gerod-110-copy-1800x1800.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Rock</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://assets.cdnelnuevodiario.com/cache/dc/ea/dceae98d249bca79654af791b1ed7142.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Jesse Joy</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://lhtcbroadband.com/wp-content/uploads/2019/06/Fireworks-Photo.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Fireworks</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>

          <View style={styles.container}>
            <Lightbox underlayColor="white">
              <View style={styles.contain}>
                <ImageBackground
                  resizeMode="contain"
                  style={styles.imagenC}
                  source={{
                    uri: "https://d10j3mvrs1suex.cloudfront.net/u/313992/96cf617802e1eb0fcb07d4aa046efeee8c1c0f2a/original/happy-young-asian-woman-listening-music-in-headphones-and-dancing-on-picture-id1278385837.jpg/!!/b%3AW1sicmVzaXplIiwxODAwXSxbIm1heCJdLFsid2UiXV0%3D/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg",
                  }}
                >
                  <Text style={styles.tituloIMG}>Yellow</Text>
                </ImageBackground>
              </View>
            </Lightbox>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  contenedorGaleria: {
    flex: 1,
    flexDirection: "row",
  },

  tituloIMG: {
    width: "100%",
    height: "20%",
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
  container: {
    width: WINDOW_WIDTH / 3.1,
    height: WINDOW_WIDTH / 3.1,
    backgroundColor: "white",
    margin: 1,
  },

  container2: {
    display: "flex",
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contain: {
    height: "100%",
  },
});
