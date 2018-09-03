import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Home extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Welcome!!
        </Text>
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
  }
});

export default Home;
