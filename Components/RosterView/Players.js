import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight
} from "react-native";

import PlayerTile from "./PlayerTile";

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = { players: this.props.players };
  }

  render() {
    console.log("players state:", this.state);
    return (
      <View>
        <Text>Players</Text>
        <FlatList
          data={this.state.players}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Player", { itemID: item.id });
              }}
            >
              <PlayerTile player={item} />
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
  button: {
    flex: 1,
    width: size,
    height: size,
    backgroundColor: "lightblue",
    padding: 5
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    color: "black",
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "left",
    textAlignVertical: "center",
    backgroundColor: "deepskyblue"
  }
});
