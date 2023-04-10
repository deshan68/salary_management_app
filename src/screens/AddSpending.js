import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { InputBox, LargButton } from "../components";

const AddSpending = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <InputBox title={"Amount"} placeholder={"Enter amount"} />
      <LargButton buttonTitile={"Add"} />
    </View>
  );
};

export default AddSpending;

const styles = StyleSheet.create({});
