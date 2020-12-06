import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  BackHandler,
  Alert,
  TouchableOpacity,
} from "react-native";
import { clearAll, getCourseList } from "../store/actions/userAction";
// action

export default function HomePage(props) {
  const { username } = useSelector((state) => state);
  // state
  const { access_token, course } = useSelector((state) => state);

  const dispatch = useDispatch();

  function logout() {
    dispatch(clearAll());
    props.navigation.navigate("FirstPage");
  }

  useEffect(() => {
    dispatch(getCourseList());
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to logout?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => logout() },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (!access_token) {
      props.navigation.navigate("LoginPage");
    }
  }, [access_token]);

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.textHeader}>Hello, {username}</Text>
        <Text style={{ fontSize: 16, fontWeight: "normal" }}>
          lets start learning
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartsSection}>
          {course
            ? course.map((item, index) => {
                return (
                  <TouchableOpacity key={index}>
                    <View style={styles.cart} key={index}>
                      <Image
                        style={styles.cartImage}
                        source={{ uri: item.image_url }}
                      />
                      <View style={styles.cartText} key={index}>
                        <Text h4 style={{ fontWeight: "bold", fontSize: 20 }}>
                          {item.title}
                        </Text>
                        <Text>
                          Price Rp.
                          {item.description}
                        </Text>
                        <Text>{item.duration} items</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerBox: {
    width: "80%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 28,
    color: "#186677",
    fontWeight: "bold",
    textAlign: "center",
  },
  textHeader: {
    fontSize: 24,
    color: "#186677",
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  cartsSection: {
    height: "60%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  cart: {
    marginTop: 10,
    minWidth: 350,
    height: 120,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    padding: 10,
  },
  cartImage: {
    left: 10,
    width: 120,
    height: 100,
    borderTopLeftRadius: 5,
  },
  cartText: {
    left: 30,
    maxWidth: 200,
    height: 100,
    color: "black",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});
