import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";
import Icon from "react-native-vector-icons/AntDesign";

const IncomeSpendingBtn = ({
  btnTitle,
  btnIcon,
  navigation,
  navigateScreen,
}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={() => {
        navigation.navigate(navigateScreen);
      }}
    >
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
    </TouchableOpacity>
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
