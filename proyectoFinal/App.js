import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

//Para el menu
const Tab = createBottomTabNavigator();

//Pantallas
import Home from "./src/screens/Home";
import Artists from "./src/screens/Artists";
import Gallery from "./src/screens/Gallery";
import Tickets from "./src/screens/Tickets";
import Title from './src/components/Title'

export default function App() {
  return (
    <NavigationContainer>
      <Title />
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              size = 25;
            } else if (route.name === 'Artists') {
              iconName = focused ? 'person-circle' : 'person-circle';
              size = 25;
            } else if (route.name === 'Gallery') {
              iconName = focused ? 'images' : 'images';
              size = 25;
            } else if (route.name === 'Tickets') {
              iconName = focused ? 'pricetag' : 'pricetag';
              size = 25;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'rgb(88, 6, 196)',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Artists"
          component={Artists}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Gallery"
          component={Gallery}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Tickets"
          component={Tickets}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}