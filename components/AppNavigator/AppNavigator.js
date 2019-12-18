import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/Home.js';
// import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: 'HomeScreen'
})

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}