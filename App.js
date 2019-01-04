/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeView from "./Components/HomeView";
import TeamsView from "./Components/TeamsView";

type Props = {};

const AppNavigator = createStackNavigator(
  {
    Home: HomeView,
    Teams: TeamsView
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
