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
    const { coach } = this.state;
    const { navigation } = this.props;

    return (
      <View>
        <Text>Coach View: {coach.full_name}</Text>
        <Button
          title="Go home..."
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
