import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class RosterView extends Component {
  render() {
    return (
      <View>
        <Text>RosterView</Text>
        <Button
          title="Go to player view"
          onPress={() => this.props.navigation.navigate("Player")}
        />
      </View>
    );
  }
}
