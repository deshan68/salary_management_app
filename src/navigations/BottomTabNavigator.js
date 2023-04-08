import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Savings } from "../screens";
import { COLORS, IMAGES } from "../constant";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import { GoalsHeader, HomeHeader } from "../components";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.primary,
        tabBarIcon: ({ color = COLORS.primary, size = 20, focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "Goals") {
            iconName = focused ? "ios-golf-sharp" : "ios-golf-outline";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            return <HomeHeader />;
          },
        }}
      />
      <Tab.Screen
        name="Goals"
        component={Savings}
        options={{
          header: () => {
            return <GoalsHeader />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
