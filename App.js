import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/Components/LoginForm";
import DashboardScreen from "./src/Components/Dashboard/dashboard";
import Header from "./src/Components/Header/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <DashboardScreen />
      <StatusBar style="auto" />
    </View>
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
