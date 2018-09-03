import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Form from "../components/Form";

import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  // constructor(props){
  //     super(props);
  //     this.state {
  //         username: '',
  //         password: '',
  //     }
  // }

  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#382F65",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  title: {
    marginTop: 200,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
