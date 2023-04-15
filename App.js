import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/Styles/main";
import LoginScreen from "./src/Components/LoginForm";
import DashboardScreen from "./src/Components/Dashboard/dashboard";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

import Header from "./src/Components/Header/Header";

export default function App() {
  // SplashScreen.hideAsync()
  //   .then((hidden) => {
  //     console.log("Hidden:", hidden);
  //   })
  //   .catch((error) => {
  //     console.log("Hide error:", error);
  //   });
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* <DashboardScreen /> */}
        <Header />
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "skyblue",
              borderBottomColor: "green",
              borderBottomWidth: 3,
            },
            tabBarStyle: { backgroundColor: "skyblue" },
            //tabBarLabelStyle: { color: "black" },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "black",
          }}
        >
          <Tab.Screen
            name="Dashboard"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <FontAwesome5 name="list-alt" size={size} color={color} />
                );
              },
            }}
          >
            {(props) => <DashboardScreen {...props} />}
          </Tab.Screen>

          <Tab.Screen
            name="Update Income"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <MaterialIcons
                    name="playlist-add"
                    size={size}
                    color={color}
                  />
                );
              },
            }}
          >
            {(props) => <DashboardScreen {...props} />}
          </Tab.Screen>

          <Tab.Screen
            name="Invest"
            options={{
              tabBarIcon: ({ size, color }) => {
                return (
                  <Ionicons name="settings-outline" size={24} color="black" />
                );
              },
            }}
          >
            {(props) => <DashboardScreen {...props} />}
          </Tab.Screen>
          
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
