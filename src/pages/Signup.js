import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Form from "../components/Form";

import { Actions } from "react-native-router-flux";

export default class Signup extends Component {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>
        <Form type="Signup" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}> Sign in</Text>
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
    justifyContent: "center"
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
