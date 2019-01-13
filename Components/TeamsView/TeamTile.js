import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { images } from "../../Images/Images";

export default class TeamTile extends Component {
  constructor(props) {
    super(props);
    this.state = { team: this.props.team };
  }

  render() {
    const { team } = this.state;
    //this logic isnt working
    // console.log("***", imageSource);
    return (
      <View style={styles.button}>
        {/* <Image source={imageSource} style={styles.image} /> */}
        <Text style={styles.buttonText}>{team.market}</Text>
        <Text style={styles.buttonText}>{team.name}</Text>
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
  },
  image: {
    flex: 1,
    width: size,
    height: size
  }
});
