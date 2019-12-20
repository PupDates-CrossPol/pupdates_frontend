import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'
import MenuScreen from './components/Menu/Menu'
import DogPackScreen from './components/DogPack/DogPack'
import MatchesScreen from './components/Matches/Matches'
import UserProfileScreen from './components/UserProfile/UserProfile'
import React, { Component } from 'react';
import firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvMymaerxk1xU-cyKi_EHhHFyIz8tcJu4",
  authDomain: "pupdates-b3204.firebaseapp.com",
  databaseURL: "",
  storageBucket: "gs://pupdates-b3204.appspot.com"
};

firebase.initializeApp(firebaseConfig);

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