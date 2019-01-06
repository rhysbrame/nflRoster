import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class CoachView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coach: this.props.navigation.getParam("item", "NO-ITEM")
    };
  }

  render() {
    return (
      <View>
        <Text>Coach View: {this.state.coach.full_name}</Text>
        <Button
          title="Go home..."
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
