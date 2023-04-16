import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { VictoryPie } from "victory-native";
import style from "../Invest/style";

const InvestScreen = () => {
  
  return (
    <View >
      <Text style={style.title}>Mutual Fund:  </Text>
      <Text>A mutual fund is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt.</Text>
      <Text style={style.title}>Share Market:  </Text>
      <Text>The share market is a platform where buyers and sellers come together to trade on publicly listed shares during specific hours of the day.</Text>
    
    </View>
  );
};

export default InvestScreen;
