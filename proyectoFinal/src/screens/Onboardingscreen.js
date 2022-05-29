import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
//Para Onboarding
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

export default function Onboardingscreen({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Home")}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../images/icons/artists.png")} />,
          title: "Onboarding",
          subtitle: "Done with React Native Onboarding Swiper",
        },
        {
          backgroundColor: "#fe6e58",
          image: <Image source={require("../images/icons/artists.png")} />,
          title: "The Title",
          subtitle: "This is the subtitle that sumplements the title.",
        },
        {
          backgroundColor: "#999",
          image: <Image source={require("../images/icons/artists.png")} />,
          title: "Triangle",
          subtitle: "Beautiful, isn't it?",
        },
      ]}
    />
  );
}
