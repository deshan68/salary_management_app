import { StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { COLORS, FONTSIZE } from "../constant";
import { useFonts } from "expo-font";

const HomeHeader = () => {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/font/NunitoSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.gray,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Text
        style={{
          fontFamily: "NunitoSans-Bold",
          fontSize: FONTSIZE.large,
          color: COLORS.black,
        }}
      >
        Goals
      </Text>
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
});
