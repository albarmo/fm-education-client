import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister, clearAll } from "../store/actions/userAction";
// components
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function RegisterPage(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [secure, setSecure] = React.useState(props.secure);

  useEffect(() => {
    dispatch(clearAll());
  }, []);

  let inputRegister = { username, email, password };
  function register() {
    dispatch(userRegister(inputRegister));
    props.navigation.navigate("LoginPage");
    setUsername("");
    setEmail("");
    setPassword("");
    setRetypePassword("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.textHeader}>Lets sign up, for start learning</Text>
      </View>
      <View style={styles.boxAction}>
        <Text
          style={{
            color: "#4D4D4D",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          Create Account
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setUsername(e)}
            value={username}
            placeholder="username"
            textAlign="center"
            maxLength={20}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
            value={email}
            placeholder="email"
            textAlign="center"
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
            value={password}
            placeholder="password"
            textAlign="center"
            maxLength={20}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.input}
            onChangeText={(e) => setRetypePassword(e)}
            value={retypePassword}
            placeholder="retype password"
            textAlign="center"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity onPress={register}>
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Confrim
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1BB55C",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerBox: {
    width: "90%",
    height: "20%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textHeader: {
    width: "58%",
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    top: "8%",
  },
  boxAction: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  form: {
    bottom: "4%",
    width: "90%",
    height: "60%",
    // backgroundColor: "gray",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    width: 280,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#0E8BA7",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "13%",
    width: "80%",
    backgroundColor: "#F6F5F5",
    borderRadius: 10,
  },
});
