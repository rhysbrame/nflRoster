import React, { Component } from "react";
import { Text, View, ActivityIndicator } from "react-native";

import Coaches from "./Coaches";
import Players from "./Players";

export default class RosterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      teamID: props.navigation.getParam("itemID", "NO-ID")
    };
  }

  static navigationOptions = ({ navigation }) => {
    console.log("****", navigation);
    return {
      title: navigation.getParam("teamName")
    };
  };

  componentDidMount() {
    const teamID = this.state.teamID;
    const url = `https://api.sportradar.us/nfl/official/trial/v5/en/teams/${teamID}/profile.json?api_key=uafzw3ah4tr78cg29dd86rbs`;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          teamData: responseJson,
          isLoading: false
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
      <View>
        <Text>{this.state.teamData.market}</Text>
        <Text>{this.state.teamData.name}</Text>
        <Text>Roster View</Text>
        <Coaches
          coaches={this.state.teamData.coaches}
          navigation={this.props.navigation}
        >
          Coaches:
        </Coaches>
        <Players
          players={this.state.teamData.players}
          navigation={this.props.navigation}
        >
          Player Roster:
        </Players>
      </View>
    );
  }
}
