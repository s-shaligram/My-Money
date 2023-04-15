import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./src/Styles/main";
import LoginScreen from "./src/Components/LoginForm";
import DashboardScreen from "./src/Components/Dashboard/dashboard";

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
    <View style={styles.container}>
      <DashboardScreen />
      <StatusBar style="auto" />
    </View>
  );
}
