import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, ICONS } from "./src/constant";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./src/navigations/HomeNavigator";

export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <HomeNavigator />
      <StatusBar barStyle={"dark-content"} />
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
