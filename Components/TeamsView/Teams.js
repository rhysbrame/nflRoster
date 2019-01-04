import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";

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

  onPress = () => this.props.navigation.navigate("Roster");

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.teams}
          renderItem={({ item }) => (
            <TouchableHighlight style={styles.button} onPress={this.onPress}>
              <Text style={styles.buttonText}>
                {item.market + " " + item.name + " " + item.id}
              </Text>
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
const size = Dimensions.get("window").width / numColumns - 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  button: {
    flex: 1,
    width: size,
    height: size,
    backgroundColor: "lightblue"
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center"
  }
});
