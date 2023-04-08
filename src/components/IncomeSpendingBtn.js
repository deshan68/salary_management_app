import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";
import Icon from "react-native-vector-icons/AntDesign";

const IncomeSpendingBtn = ({ btnTitle, btnIcon }) => {
  return (
    <View style={styles.btnContainer}>
      <Icon name={btnIcon} size={20} color={COLORS.white} />
      <Text
        style={{
          fontFamily: "NunitoSans-Regular",
          fontSize: FONTSIZE.small,
          color: COLORS.white,
        }}
      >
        {btnTitle}
      </Text>
    </View>
  );
};

export default IncomeSpendingBtn;

const styles = StyleSheet.create({
  btnContainer: {
    width: 180,
    height: 50,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
