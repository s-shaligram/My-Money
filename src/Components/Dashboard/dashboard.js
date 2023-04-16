import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./style";
const DashboardScreen = () => {
  const [income, setIncome] = useState(50000);
  const [expenses, setExpenses] = useState(23000);
  const [savingsGoal, setSavingsGoal] = useState(28000);

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
        <Text style={styles.title}>Savings</Text>
        <Text style={styles.amount}>${savingsGoal}</Text>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
