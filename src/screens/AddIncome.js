import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { InputBox } from "../components";

const AddIncome = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <InputBox title={"Amount"} placeholder={"Enter amount"} />
    </View>
  );
};

export default AddIncome;

const styles = StyleSheet.create({});
