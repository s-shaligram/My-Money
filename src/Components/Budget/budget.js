import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { VictoryPie } from "victory-native";

const BudgetScreen = () => {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    // Load saved budgets from storage
    const savedBudgets = [
      { category: "Food", budget: 300, spent: 200 },
      { category: "Rent", budget: 1000, spent: 900 },
      { category: "Utilities", budget: 200, spent: 150 },
    ];
    setBudgets(savedBudgets);
  }, []);

  const addBudget = (category, budget) => {
    // Add a new budget to the list
    const newBudget = { category, budget, spent: 0 };
    setBudgets([...budgets, newBudget]);
  };

  const deleteBudget = (index) => {
    // Remove a budget from the list
    const newBudgets = [...budgets];
    newBudgets.splice(index, 1);
    setBudgets(newBudgets);
  };

  const updateBudget = (index, budget) => {
    // Update a budget in the list
    const newBudgets = [...budgets];
    newBudgets[index] = { ...newBudgets[index], ...budget };
    setBudgets(newBudgets);
  };

  const getTotalBudget = () => {
    // Calculate the total budget across all categories
    return budgets.reduce((total, budget) => total + budget.budget, 0);
  };

  const getTotalSpent = () => {
    // Calculate the total amount spent across all categories
    return budgets.reduce((total, budget) => total + budget.spent, 0);
  };

  const getCategoryData = () => {
    // Convert the budget data into a format that can be displayed in a VictoryPie chart
    return budgets.map((budget) => ({
      x: budget.category,
      y: budget.spent,
      label: `$${budget.spent} / $${budget.budget}`,
    }));
  };

  return (
    <View>
      <Text>Total budget: ${getTotalBudget()}</Text>
      <Text>Total spent: ${getTotalSpent()}</Text>
      <VictoryPie data={getCategoryData()} />
      {budgets.map((budget, index) => (
        <View key={index}>
          <Text>{budget.category}</Text>
          <TextInput
            placeholder="Budget"
            keyboardType="numeric"
            onChangeText={(text) =>
              updateBudget(index, { budget: parseInt(text, 10) })
            }
            value={budget.budget.toString()}
          />
          <TextInput
            placeholder="Spent"
            keyboardType="numeric"
            onChangeText={(text) =>
              updateBudget(index, { spent: parseInt(text, 10) })
            }
            value={budget.spent.toString()}
          />
          <Button title="Delete" onPress={() => deleteBudget(index)} />
        </View>
      ))}
      <View>
        <TextInput
          placeholder="Category"
          onChangeText={(text) => setCategory(text)}
        />
        <TextInput
          placeholder="Budget"
          keyboardType="numeric"
          onChangeText={(text) => setBudget(parseInt(text, 10))}
        />
        <Button title="Add" onPress={() => addBudget(category, budget)} />
      </View>
    </View>
  );
};

export default BudgetScreen;
