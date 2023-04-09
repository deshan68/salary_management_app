import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { COLORS } from "../constant";
import fontSize from "../constant/fontSize";

const InputBox = ({ title, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{ fontFamily: "NunitoSans-Regular", fontSize: fontSize.meduim }}
      >
        {title}
      </Text>
      <TextInput style={styles.textBox} placeholder={placeholder} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textBox: {
    width: "100%",
    backgroundColor: COLORS.white,
    height: 50,
    padding: 10,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    borderRadius: 10,
  },
});
