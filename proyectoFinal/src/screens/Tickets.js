import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import AnimacionSpotify from "../components/AnimacionSpotify.js";
const WINDOW_WIDTH = Dimensions.get("window").width;

const startValue = new Animated.Value(1);
const endValue = 1.3;
const duration = 1000;

export default function Tickets() {
  return <AnimacionSpotify></AnimacionSpotify>;
}
