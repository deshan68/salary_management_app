import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AGoal, CreateGoal, Goals } from "../screens";
import { GoalsHeader, HomeHeader } from "../components";
import { COLORS, FONTSIZE } from "../constant";
import { useRoute } from "@react-navigation/native";
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
        component={Goals}
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
      <Stack.Screen
        name="AGoal"
        component={AGoal}
        options={({ route }) => ({
          title: route?.params?.goalTitle,
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.meduim,
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default GoalsNavigator;

const styles = StyleSheet.create({});
