import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, FONTSIZE } from "../constant";
import { useFonts } from "expo-font";
import { BudgetCard, IncomeSpendingBtn, SavingCard } from "../components";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "NunitoSans-Bold": require("../assets/font/NunitoSans-Bold.ttf"),
    "NunitoSans-Regular": require("../assets/font/NunitoSans-Regular.ttf"),
    "NunitoSans-SemiBold": require("../assets/font/NunitoSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const savingCardDetails = [
    {
      goalName: "Car",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "40%",
    },
    {
      goalName: "House",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "60%",
    },
    {
      goalName: "Iphone",
      totalAmmount: 3000,
      currntAmmount: 1000,
      Completed: "10%",
    },
  ];
  return (
    <ScrollView style={styles.container}>
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
          <IncomeSpendingBtn
            btnTitle={"Add Income"}
            btnIcon={"download"}
            navigation={navigation}
            navigateScreen={"AddIncome"}
          />
          <IncomeSpendingBtn
            btnTitle={"Add Spending"}
            btnIcon={"upload"}
            navigation={navigation}
            navigateScreen={"AddSpending"}
          />
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
          <BudgetCard icoName="upload" color={COLORS.red} cardName="Spending" />
        </View>
      </View>
      {/* -------- Saving section------- */}
      <View style={styles.savingCardSection}>
        <View style={styles.sectionTitle}>
          <Text
            style={{
              fontFamily: "NunitoSans-Bold",
              fontSize: FONTSIZE.meduim,
              color: COLORS.black,
            }}
          >
            Savings
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("GoalsNavigator")}
          >
            <Text
              style={{
                fontFamily: "NunitoSans-Regular",
                fontSize: FONTSIZE.small,
                color: COLORS.primary,
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectoionCardContainer}>
          {savingCardDetails.map((item) => (
            <SavingCard key={item.goalName} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
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
  savingCardSection: {
    width: "100%",
    marginTop: 15,
  },
  sectionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  sectoionCardContainer: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
