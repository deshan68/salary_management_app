import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { InputBox, LargButton } from "../components";
import { COLORS, FONTSIZE } from "../constant";

const CreateGoal = () => {
  return (
    <View style={styles.container}>
      <InputBox title="Amount" placeholder="Enter amount" />
      <InputBox title="Goal name" placeholder="Enter goal name" />
      <LargButton buttonTitile={"Create"} />
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
});
