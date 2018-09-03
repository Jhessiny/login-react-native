import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
// import LinearGradient from "react-native-linear-gradient";

import Routes from "./src/Routes";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#32144E" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
