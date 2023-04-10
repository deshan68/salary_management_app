import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { COLORS, FONTSIZE } from "../constant";

const AGoal = () => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <View style={styles.savingCard}>
          <Text
            style={{
              fontFamily: "NunitoSans-Bold",
              color: COLORS.white,
              fontSize: FONTSIZE.large,
            }}
          >
            {route?.params?.completedPrecentage}%
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSans-Regular",
              color: COLORS.white,
              fontSize: FONTSIZE.small,
              marginTop: -8,
              marginBottom: 3,
            }}
          >
            RS: {route?.params?.currntAmmount}.00
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSans-Regular",
              color: COLORS.white,
              fontSize: FONTSIZE.small,
            }}
          >
            Your savings
          </Text>
        </View>
        <View style={[styles.savingCard, { backgroundColor: COLORS.red }]}>
          <Text
            style={{
              fontFamily: "NunitoSans-Bold",
              color: COLORS.white,
              fontSize: FONTSIZE.large,
            }}
          >
            {100 - route?.params?.completedPrecentage}%
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSans-Regular",
              color: COLORS.white,
              fontSize: FONTSIZE.small,
              marginTop: -8,
              marginBottom: 3,
            }}
          >
            RS: {route?.params?.totalAmmount - route?.params?.currntAmmount}.00
          </Text>
          <Text
            style={{
              fontFamily: "NunitoSans-Regular",
              color: COLORS.white,
              fontSize: FONTSIZE.small,
            }}
          >
            Remainig amount
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AGoal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
  },
  savingCard: {
    height: 113,
    width: "49%",
    backgroundColor: COLORS.green,
    borderRadius: 20,
    padding: 15,
  },
});
