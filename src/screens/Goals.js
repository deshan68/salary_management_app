import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BigGoalCard from "../components/BigGoalCard";
import { COLORS, FONTSIZE } from "../constant";

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
      <View>
        {savingCardDetails.map((item) => (
          <BigGoalCard key={item.goalName} item={item} />
        ))}
      </View>
      <TouchableOpacity
        style={styles.createNewGoalBtn}
        onPress={() => navigation.navigate("CreateGoal")}
      >
        <Text
          style={{
            fontFamily: "NunitoSans-Bold",
            color: COLORS.white,
            fontSize: FONTSIZE.meduim,
          }}
        >
          Create new goal
        </Text>
      </TouchableOpacity>
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
    justifyContent: "space-between",
  },
  createNewGoalBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});
