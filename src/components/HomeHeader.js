import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { COLORS, FONTSIZE, IMAGES } from "../constant";
import { useFonts } from "expo-font";

const HomeHeader = () => {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/font/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/font/NunitoSans-Regular.ttf"),
    "NunitoSans-SemiBold": require("../assets/font/NunitoSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <View style={{ gap: -5 }}>
        <Text
          style={{
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.large,
            color: COLORS.black,
          }}
        >
          Hello, Perera
        </Text>
        <Text
          style={{
            fontFamily: "NunitoSans-Regular",
            fontSize: FONTSIZE.small,
            color: COLORS.fontGray,
          }}
        >
          Here you can view overview of your budgjet{" "}
        </Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          source={require("../assets/image/perera.jpg")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  ImageContainer: {
    borderRadius: 40,
    width: 40,
    height: 40,
  },
  image: {
    borderWidth: 2,
    borderColor: COLORS.primary,
    overflow: "hidden",
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});
