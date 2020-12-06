import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { userLogin, clearAll } from "../store/actions/userAction";

// components
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Alert,
  Modal,
} from "react-native";

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { access_token } = useSelector((state) => state);

  useEffect(() => {
    if (access_token) {
      props.navigation.navigate("HomePage");
    } else {
      dispatch(clearAll());
    }
  }, [access_token]);

  function goToRegister() {
    console.log("go to register");
    props.navigation.navigate("RegisterPage");
  }

  function login() {
    dispatch(userLogin(username, password));
    if (access_token) {
      props.navigation.navigate("HomePage", {
        username: username,
      });
    } else {
      console.log("failed login");
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Image
          source={require("../assets/undraw_Login_re_4vu2.png")}
          style={{
            width: 300,
            height: 200,
          }}
        />
      </View>
      <View style={styles.boxAction}>
        <Text style={styles.textHeader}>Login into your account</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setUsername(e)}
          value={username}
          placeholder="username"
          textAlign="center"
        />
        <TextInput
          style={styles.input}
          onChangeText={(e) => setPassword(e)}
          value={password}
          secureTextEntry={true}
          placeholder="password"
          textAlign="center"
        />

        {/* modals */}
        <View style={modals.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={modals.centeredView}>
              <View style={modals.modalView}>
                <Text style={modals.modalText}>Email or Password Wrong</Text>

                <TouchableHighlight
                  style={{ ...modals.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Text style={modals.textStyle}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        {/* modals-end */}

        <TouchableOpacity onPress={login}>
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Sign In
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ color: "#4D4D4D", fontSize: 14, fontWeight: "normal" }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerBox: {
    width: "80%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    top: "5%",
  },
  logo: {
    fontSize: 28,
    color: "#186677",
    fontWeight: "bold",
    textAlign: "center",
  },
  textHeader: {
    fontSize: 18,
    color: "#186677",
    fontWeight: "bold",
    textAlign: "center",
  },
  boxAction: {
    top: 3,
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "space-evenly",
    // backgroundColor: "red",
    bottom: "5%",
  },
  button: {
    width: 280,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#0E8BA7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
  },
  input: {
    height: 50,
    width: "70%",
    backgroundColor: "#F6F5F5",
    borderRadius: 10,
    marginTop: "5%",
  },
});

const modals = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#0E8BA7",
    borderRadius: 12,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
