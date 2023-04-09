import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateGoal, Goal } from "../screens";
import { GoalsHeader, HomeHeader } from "../components";
import { COLORS, FONTSIZE } from "../constant";

const GoalsNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerShown: true,
        }
      }
    >
      <Stack.Screen
        name="Goals"
        component={Goal}
        options={{
          header: () => {
            return <GoalsHeader />;
          },
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="CreateGoal"
        component={CreateGoal}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerBackTitleVisible: false,
          headerBackTitle: "arun",
          headerTitleStyle: {
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.meduim,
          },
          title: "Create goal",
        }}
      />
    </Stack.Navigator>
  );
};

export default GoalsNavigator;

const styles = StyleSheet.create({});
