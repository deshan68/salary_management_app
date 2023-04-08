import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, ICONS } from "./src/constant";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      <StatusBar barStyle={"dark-content"} />
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text>
    //   <Text style={{ fontFamily: "NunitoSans-Regular", fontSize: 30 }}>
    //     NunitoSans-Bold
    //   </Text>
    //   {ICONS.delete}
    //   <StatusBar style="auto" /> */}
    // </View>
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
