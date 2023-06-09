import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { COLORS, FONTSIZE } from "../constant";

const SavingCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View style={styles.goalNameWithIcon}>
        <Text
          style={{
            fontFamily: "NunitoSans-Regular",
            fontSize: FONTSIZE.verySmall,
            color: COLORS.fontGray,
          }}
        >
          {item.goalName}
        </Text>
        <Icon name="right" size={15} />
      </View>
      <Text
        style={{
          fontFamily: "NunitoSans-SemiBold",
          fontSize: FONTSIZE.verySmall,
          color: COLORS.black,
        }}
      >
        RS: {item.currntAmmount}.00
      </Text>
      <View style={styles.GoalCompletionIndicatorContainer}>
        <View
          style={[styles.CompletedIndicator, { width: item.Completed }]}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

export default SavingCard;

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    backgroundColor: COLORS.white,
    width: "49%",
    borderRadius: 20,
    gap: 3,
    marginBottom: 5,
  },
  goalNameWithIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  GoalCompletionIndicatorContainer: {
    backgroundColor: COLORS.gray,
    width: "100%",
    height: 7,
    borderRadius: 7,
    marginTop: 20,
  },
  CompletedIndicator: {
    backgroundColor: COLORS.primary,

    height: 7,
    borderRadius: 7,
  },
});
