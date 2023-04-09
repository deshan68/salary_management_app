import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { InputBox } from "../components";
import { COLORS, FONTSIZE } from "../constant";

const CreateGoal = () => {
  return (
    <View style={styles.container}>
      <InputBox title="Amount" placeholder="Enter amount" />
      <InputBox title="Goal name" placeholder="Enter goal name" />
      <TouchableOpacity style={styles.createNewGoalBtn}>
        <Text
          style={{
            fontFamily: "NunitoSans-Bold",
            color: COLORS.white,
            fontSize: FONTSIZE.meduim,
          }}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.gray,
    paddingHorizontal: 10,
  },
  createNewGoalBtn: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
