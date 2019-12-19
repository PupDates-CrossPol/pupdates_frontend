import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'
import MenuScreen from './components/Menu/Menu'
import React, { Component } from 'react';

const MainNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Menu: {screen: MenuScreen}
})

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App