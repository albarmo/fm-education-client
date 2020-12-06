import React, { useState, useEfect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

export default function FirstPage(props) {
  function goToLogin() {
    console.log("go to login");
    props.navigation.navigate("LoginPage");
  }

  function goToRegister() {
    console.log("go to register");
    props.navigation.navigate("RegisterPage");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.textHeader}>Hello, welcome to education app </Text>
      </View>
      <View style={styles.boxAction}>
        <TouchableOpacity onPress={goToLogin}>
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{ color: "#4D4D4D", fontSize: 18, fontWeight: "normal" }}
          >
            Dont have an account?
          </Text>
          <TouchableOpacity onPress={goToRegister}>
            <Text
              style={{
                color: "#186677",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={require("../assets/education.png")}
          style={{
            width: 400,
            height: 300,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBox: {
    width: "80%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 28,
    color: "#186677",
    fontWeight: "bold",
    textAlign: "center",
  },
  boxAction: {
    width: "80%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0E8BA7",
    alignItems: "center",
    justifyContent: "center",
  },
});
