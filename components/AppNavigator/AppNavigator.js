import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../Home/Home.js';

const AppContainer = createAppContainer({
  Home: HomeScreen
},
{
  initialRouteName: 'Home'
})

export default class App extends Component {
  render() {
    return <AppNavigator />
  }
}