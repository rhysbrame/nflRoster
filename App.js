/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeView from "./Components/HomeView/HomeView";
import TeamsView from "./Components/TeamsView/TeamsView";
import RosterView from "./Components/RosterView/RosterView";
import PlayerView from "./Components/PlayerView/PlayerView";
import CoachView from "./Components/CoachView/CoachView";

type Props = {};

const AppNavigator = createStackNavigator(
  {
    Home: HomeView,
    Teams: TeamsView,
    Roster: RosterView,
    Player: PlayerView,
    Coach: CoachView
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "midnightblue"
      },
      headerTintColor: "gold",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
