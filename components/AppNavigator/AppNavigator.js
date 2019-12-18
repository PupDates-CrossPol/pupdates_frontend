import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/Home.js';
import LoginScreen from '../LoginForm/LoginForm'
// import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
},
{
  initialRouteName: 'Login'
})

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}