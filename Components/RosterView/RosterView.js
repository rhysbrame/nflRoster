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
    const { isLoading, teamData } = this.state;
    const { navigation } = this.props;
    if (isLoading) {
      return (
        <View style={{ flex: 1, padding: 50 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View>
        <Text>{teamData.market}</Text>
        <Text>{teamData.name}</Text>
        <Text>Roster View</Text>
        <Coaches coaches={teamData.coaches} navigation={navigation}>
          Coaches:
        </Coaches>
        <Players players={teamData.players} navigation={navigation}>
          Player Roster:
        </Players>
      </View>
    );
  }
}
