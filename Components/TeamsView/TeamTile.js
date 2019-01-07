import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";

export default class TeamTile extends Component {
  constructor(props) {
    super(props);
    this.state = { team: this.props.team };
  }

  render() {
    const { team } = this.state;

    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>{team.market}</Text>
        <Text style={styles.buttonText}>{team.name}</Text>
        <Text style={styles.buttonText}>{team.alias}</Text>
      </View>
    );
  }
}

const numColumns = 4;
const size = Dimensions.get("window").width / numColumns;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: size,
    height: size,
    backgroundColor: "lightblue",
    padding: 5
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    backgroundColor: "deepskyblue"
  }
});
