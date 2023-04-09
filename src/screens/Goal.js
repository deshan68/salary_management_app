import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BigGoalCard from "../components/BigGoalCard";
import { COLORS } from "../constant";

const Goals = ({ navigation }) => {
  const savingCardDetails = [
    {
      goalName: "Car",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "40%",
    },
    {
      goalName: "House",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "60%",
    },
    {
      goalName: "Iphone",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "10%",
    },
  ];
  return (
    <View style={styles.container}>
      {savingCardDetails.map((item) => (
        <BigGoalCard key={item.goalName} item={item} />
      ))}
    </View>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray,
  },
});
