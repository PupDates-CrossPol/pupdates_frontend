import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/Home.js';
import LoginScreen from '../LoginForm/LoginForm'
// import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen
},
{
  initialRouteName: 'LoginScreen'
})

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}