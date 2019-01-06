import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight
} from "react-native";

import CoachTile from "./CoachTile";

export default class Coaches extends Component {
  constructor(props) {
    super(props);
    this.state = { coaches: this.props.coaches };
  }

  render() {
    console.log("coaches state:", this.state);
    return (
      <View>
        <Text>Coaches</Text>
        <FlatList
          data={this.state.coaches}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Coach", { item: item });
              }}
            >
              <CoachTile coach={item} />
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
