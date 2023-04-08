import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";
import { useFonts } from "expo-font";
import { BudgetCard, IncomeSpendingBtn } from "../components";

const Home = () => {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/font/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/font/NunitoSans-Regular.ttf"),
    "NunitoSans-SemiBold": require("../assets/font/NunitoSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.budgetSection}>
        <Text
          style={{
            fontFamily: "NunitoSans-Regular",
            fontSize: FONTSIZE.meduim,
            alignSelf: "center",
            color: COLORS.white,
          }}
        >
          My budget
        </Text>
        <Text
          style={{
            fontFamily: "NunitoSans-Bold",
            fontSize: FONTSIZE.large,
            alignSelf: "center",
            color: COLORS.white,
          }}
        >
          Rs: 250000.00
        </Text>
        <View style={styles.incomeSpendingBtnContainer}>
          <IncomeSpendingBtn btnTitle={"Add Income"} btnIcon={"download"} />
          <IncomeSpendingBtn btnTitle={"Add Spending"} btnIcon={"upload"} />
        </View>
        <Text
          style={{
            fontFamily: "NunitoSans-Bold",
            color: COLORS.white,
            fontSize: FONTSIZE.small,
          }}
        >
          Budget overview
        </Text>
        <View style={styles.overviewCardContainer}>
          <BudgetCard
            icoName="download"
            color={COLORS.green}
            cardName="Incomes"
          />
          <BudgetCard
            icoName="download"
            color={COLORS.red}
            cardName="Spending"
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  budgetSection: {
    height: 360,
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    gap: 5,
  },
  incomeSpendingBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  overviewCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
});
