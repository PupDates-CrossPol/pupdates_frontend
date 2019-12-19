import React, { Component } from 'react';
// import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/Home.js';
import LoginScreen from '../LoginForm/LoginForm'
import MenuScreen from '../Menu/Menu'
// import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
  // Menu: MenuScreen,
  Menu: createStackNavigator({ MenuScreen }),
},
{
  initialRouteName: 'Login'
})

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}