import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'
import MenuScreen from './components/Menu/Menu'
import DogPackScreen from './components/DogPack/DogPack'
import MatchesScreen from './components/Matches/Matches'
import UserProfileScreen from './components/UserProfile/UserProfile'
import React, { Component } from 'react';

const MainNavigator = createSwitchNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Menu: {screen: MenuScreen},
  DogPack: {screen: DogPackScreen},
  Matches: {screen: MatchesScreen},
  UserProfile: {screen: UserProfileScreen}
})

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {
  render() {
    return <AppContainer />
  }
}

export default App