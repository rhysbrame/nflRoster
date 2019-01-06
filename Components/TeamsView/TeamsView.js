import React, { Component } from "react";
import { View, Button, ActivityIndicator } from "react-native";

import Teams from "./Teams";

export default class TeamsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = {
    title: "Teams"
  };

  componentDidMount() {
    return fetch(
      "https://api.sportradar.us/nfl/official/trial/v5/en/league/hierarchy.json?api_key=uafzw3ah4tr78cg29dd86rbs"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 50 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View
        style={{
          flex: 1,
          paddingTop: 5,
          paddingBottom: 35
        }}
      >
        <Teams
          teamsData={this.state.dataSource}
          navigation={this.props.navigation}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
