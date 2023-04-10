import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";

const LargButton = ({ buttonTitile }) => {
  return (
    <TouchableOpacity style={styles.createNewGoalBtn}>
      <Text
        style={{
          fontFamily: "NunitoSans-Bold",
          color: COLORS.white,
          fontSize: FONTSIZE.meduim,
        }}
      >
        {buttonTitile}
      </Text>
    </TouchableOpacity>
  );
};

export default LargButton;

const styles = StyleSheet.create({
  createNewGoalBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
