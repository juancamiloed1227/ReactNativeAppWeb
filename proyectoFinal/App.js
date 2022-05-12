import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
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
      <Tab.Navigator screenOptions={{headerShown:false}} barStyle={{ paddingBottom: 15 }, { paddingTop: 15 }}>
        <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: () => (<Image source={require('./src/images/icons/home.png')} style={{width: 25, height: 25}} />)
                }}/>
        <Tab.Screen name="Artists" component={Artists} options={{
                    tabBarIcon: () => (<Image source={require('./src/images/icons/artists.png')} style={{width: 25, height: 25}} />)
                }}/>
        <Tab.Screen name="Gallery" component={Gallery} options={{
                    tabBarIcon: () => (<Image source={require('./src/images/icons/gallery.png')} style={{width: 25, height: 25}} />)
                }}/>
        <Tab.Screen name="Tickets" component={Tickets} options={{
                    tabBarIcon: () => (<Image source={require('./src/images/icons/tickets.png')} style={{width: 25, height: 25}} />)
                }}/>
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
