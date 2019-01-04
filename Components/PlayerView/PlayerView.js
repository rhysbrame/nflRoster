import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class PlayerView extends Component {
  render() {
    return (
      <View>
        <Text>PlayerView</Text>
        <Button
          title="Go home..."
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
