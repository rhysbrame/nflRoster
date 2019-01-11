import React, { Component } from "react";
import {
  View,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";

import TeamTile from "./TeamTile";

function unpackTeams(data) {
  const teamsArray = [];
  data.conferences.forEach(conference => {
    conference.divisions.forEach(division => {
      division.teams.forEach(team => {
        teamsArray.push(team);
      });
    });
  });
  return teamsArray;
}

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: unpackTeams(this.props.teamsData) };
  }

  render() {
    const { teams } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={teams}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Roster", {
                  itemID: item.id,
                  teamName: item.name
                });
              }}
            >
              <View>
                <TeamTile team={item} />
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={({ id }, index) => id}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const numColumns = 4;
const size = Dimensions.get("window").width / numColumns;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "blue"
  }
});
