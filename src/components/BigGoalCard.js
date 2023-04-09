import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";

const BigGoalCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "NunitoSans-Bold",
          fontSize: FONTSIZE.large,
          color: COLORS.black,
          alignSelf: "flex-start",
        }}
      >
        {item.goalName}
      </Text>
      <Text
        style={{
          fontFamily: "NunitoSans-Regular",
          fontSize: FONTSIZE.verySmall,
          color: COLORS.black,
          alignSelf: "flex-end",
        }}
      >
        {item.Completed}
      </Text>
      <View style={styles.GoalCompletionIndicatorContainer}>
        <View
          style={[styles.CompletedIndicator, { width: item.Completed }]}
        ></View>
      </View>
    </View>
  );
};

export default BigGoalCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  GoalCompletionIndicatorContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 0.5,
    borderColor: COLORS.primary,
    width: "100%",
    height: 7,
    borderRadius: 7,
  },
  CompletedIndicator: {
    backgroundColor: COLORS.primary,
    height: 7,
    borderRadius: 7,
  },
});
