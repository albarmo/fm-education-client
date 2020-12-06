import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as StateProvider } from "react-redux";
import store from "./store/index";

// used Screens
import { FirstPage, LoginPage, RegisterPage, HomePage } from "./screens/index";
const Stack = createStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: "none",
  initialRouteName: "FirstPage",
};

export default function App() {
  return (
    <StateProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="FirstPage" component={FirstPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="HomePage" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
