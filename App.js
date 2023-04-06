import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { COLORS, ICONS } from "./src/constant";

export default function App() {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("./src/assets/font/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("./src/assets/font/NunitoSans-Regular.ttf"),
    "NunitoSans-SemiBold": require("./src/assets/font/NunitoSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={{ fontFamily: "NunitoSans-Regular", fontSize: 30 }}>
        NunitoSans-Bold
      </Text>
      {ICONS.delete}
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
