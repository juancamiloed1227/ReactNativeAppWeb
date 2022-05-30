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
//Pantallas
import Home from "./Home";

export default function Onboardingscreen({ navigation }) {
  return (
    <Onboarding
      onDone={() => navigation.navigate("Navigation")}
      onSkip={() => navigation.navigate("Navigation")}
      pages={[
        {
          backgroundColor: "#AEFFF4",
          image: <Image source={require("../images/onboarding/1.png")} />,
          title: "History",
          subtitle: "",
        },
        {
          backgroundColor: "#DCC3FC",
          image: <Image source={require("../images/onboarding/2.png")} />,
          title: "",
          subtitle: "",
        },
        {
          backgroundColor: "#9BCEFF",
          image: <Image source={require("../images/onboarding/3.png")} />,
          title: "",
          subtitle: "",
        },
      ]}
    />
  );
}
