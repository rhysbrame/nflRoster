import React, { Component } from "react";
import { Text, View, Button, ActivityIndicator } from "react-native";

export default class PlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playerID: props.navigation.getParam("itemID", "NO-ID")
    };
  }

  componentDidMount() {
    const playerID = this.state.playerID;
    const url = `https://api.sportradar.us/nfl/official/trial/v5/en/players/${playerID}/profile.json?api_key=uafzw3ah4tr78cg29dd86rbs`;

    return fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          playerData: responseJson,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { isLoading, playerData } = this.state;
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
        <Text>PlayerView: {playerData.name}</Text>
        <Text>PlayerView: {playerData.status}</Text>
        <Button
          title="Go home..."
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    );
  }
}
