import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const BudgetCard = ({ icoName, color, cardName }) => {
  return (
    <View style={styles.budgetCard}>
      <View style={styles.iconWithPrecentage}>
        <View style={styles.iconContainer}>
          <AntDesign name={icoName} color={COLORS.white} size={15} />
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Ionicons name="trending-up" color={color} size={15} />
          <Text
            style={{
              fontFamily: "NunitoSans-SemiBold",
              color: color,
              fontSize: FONTSIZE.small,
            }}
          >
            +2.60%
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontFamily: "NunitoSans-Regular",
          color: COLORS.fontGray,
          fontSize: FONTSIZE.small,
        }}
      >
        {cardName}
      </Text>
      <Text
        style={{
          fontFamily: "NunitoSans-Bold",
          color: COLORS.black,
          fontSize: FONTSIZE.meduim,
        }}
      >
        RS: 3000.00
      </Text>
    </View>
  );
};

export default BudgetCard;

const styles = StyleSheet.create({
  budgetCard: {
    height: 125,
    width: "49%",
    borderRadius: 20,
    backgroundColor: COLORS.white,
    padding: 15,
    justifyContent: "space-between",
  },
  iconWithPrecentage: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.black,
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
