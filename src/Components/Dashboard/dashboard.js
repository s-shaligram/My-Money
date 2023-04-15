import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./style";
const DashboardScreen = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [savingsGoal, setSavingsGoal] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Income</Text>
        <Text style={styles.amount}>${income}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Expenses</Text>
        <Text style={styles.amount}>-${expenses}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Savings Goal</Text>
        <Text style={styles.amount}>${savingsGoal}</Text>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
