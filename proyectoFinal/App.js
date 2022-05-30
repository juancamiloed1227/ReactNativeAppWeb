import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";

import "react-native-gesture-handler";

//Pantallas
import Home from "./src/screens/Home";
import Artists from "./src/screens/Artists";
import Gallery from "./src/screens/Gallery";
import Tickets from "./src/screens/Tickets";
import Title from "./src/components/Title";
import OnboardingScreen from "./src/screens/Onboardingscreen";

//Componente
import Navigation from "./src/components/Navigation";
import { NavigationContainer } from "@react-navigation/native";

//Onboarding
import { createStackNavigator } from "@react-navigation/stack";
import Onboardingscreen from "./src/screens/Onboardingscreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Title />
      <AppStack.Navigator headerShown="false">
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Onboardingscreen"
          component={OnboardingScreen}
        />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen
          options={{ headerShown: false }}
          name="Navigation"
          component={Navigation}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
