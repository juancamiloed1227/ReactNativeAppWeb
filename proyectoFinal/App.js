import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Para el menu
const Tab = createBottomTabNavigator();

//Pantallas
import Home from "./src/screens/Home";
import Artists from "./src/screens/Artists";
import Gallery from "./src/screens/Gallery";
import Tickets from "./src/screens/Tickets";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Artists" component={Artists} />
        <Tab.Screen name="Gallery" component={Gallery} />
        <Tab.Screen name="Tickets" component={Tickets} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
