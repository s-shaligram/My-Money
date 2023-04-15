import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
//import firebase from "./src/Database/config.js";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User successfully logged in
        const { user } = userCredential;
        console.log(`Logged in as ${user.email}`);
      })
      .catch((error) => {
        // Handle login errors
        console.log(`Login failed: ${error.message}`);
      });
  };

  return (
    <View>
      <TextInput placeholder="Email" onChangeText={setEmail} value={email} />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
