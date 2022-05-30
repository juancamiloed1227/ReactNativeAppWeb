import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";

//Pantallas
import Home from "../screens/Home";
import Artists from "../screens/Artists";
import Gallery from "../screens/Gallery";
import Tickets from "../screens/Tickets";
import Title from "../components/Title";
//Para el menu
const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

import { createStackNavigator } from "@react-navigation/stack";

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            size = 25;
          } else if (route.name === "Artists") {
            iconName = focused ? "person-circle" : "person-circle";
            size = 25;
          } else if (route.name === "Gallery") {
            iconName = focused ? "images" : "images";
            size = 25;
          } else if (route.name === "Tickets") {
            iconName = focused ? "pricetag" : "pricetag";
            size = 25;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "rgb(88, 6, 196)",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Artists"
        component={Artists}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Gallery"
        component={Gallery}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
