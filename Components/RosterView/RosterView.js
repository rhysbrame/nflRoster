import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class RosterView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      teamData: {},
      teamID: props.navigation.getParam("itemID", "NO-ID")
    };
  }

  componentDidMount() {
    const teamID = this.state.teamID;
    const url = `https://api.sportradar.us/nfl/official/trial/v5/en/teams/${teamID}/profile.json?api_key=uafzw3ah4tr78cg29dd86rbs`;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            teamData: responseJson
          },
          function() {
            console.log("teamdata", this.state.teamData);
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Text>RosterView: {this.state.teamID}</Text>
        <Text>Roster: {this.state.teamData.alias}</Text>
        <Button
          title="Go to player view"
          onPress={() => this.props.navigation.navigate("Player")}
        />
      </View>
    );
  }
}
