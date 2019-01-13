import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

class HomeView extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={require("../../Images/NFL.png")}
          style={{ height: 100, width: 75 }}
        />
        <Text style={styles.text}>NFL Roster</Text>
        <Button
          title="Enter"
          onPress={() => navigation.navigate("Teams")}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  text: {
    paddingBottom: 14,
    color: "black",
    fontSize: 45,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    paddingBottom: 14,
    color: "black",
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default HomeView;
