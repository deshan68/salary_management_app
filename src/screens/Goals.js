import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import BigGoalCard from "../components/BigGoalCard";
import { COLORS, FONTSIZE } from "../constant";

const Goals = ({ navigation }) => {
  const savingCardDetails = [
    {
      goalName: "Car",
      totalAmmount: 1000,
      currntAmmount: 200,
      Completed: 20,
    },
    {
      goalName: "House",
      totalAmmount: 100,
      currntAmmount: 30,
      Completed: 30,
    },
    {
      goalName: "Iphone",
      totalAmmount: 1000,
      currntAmmount: 700,
      Completed: 70,
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        {savingCardDetails.map((item) => (
          <BigGoalCard
            key={item.goalName}
            item={item}
            navigation={navigation}
          />
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
