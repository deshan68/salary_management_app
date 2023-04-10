import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import { AddIncome, AddSpending } from "../screens";
import { COLORS, FONTSIZE } from "../constant";

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="AddIncome"
        component={AddIncome}
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.meduim,
          },
          title: "Add Income",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="AddSpending"
        component={AddSpending}
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.meduim,
          },
          title: "Add Spending",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
