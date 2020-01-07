import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/Home/Home'
import LoginScreen from './components/LoginForm/LoginForm'
import MenuScreen from './components/Menu/Menu'
import DogPackScreen from './components/DogPack/DogPack'
import MatchesScreen from './components/Matches/Matches'
import UserProfileScreen from './components/UserProfile/UserProfile'
import AddDogScreen from './components/AddDog/AddDog'
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers/index.js'
import { Provider, connect } from 'react-redux'
import { logger } from 'redux-logger'



firebase.initializeApp(ApiKeys.firebaseConfig);

const store = createStore(rootReducer)

// let LoginFormContainer = connect(state => ({ user: state.user })(LoginForm))

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen: HomeScreen},
  Menu: {screen: MenuScreen},
  DogPack: {screen: DogPackScreen},
  Matches: {screen: MatchesScreen},
  UserProfile: {screen: UserProfileScreen},
  AddDog: {screen: AddDogScreen}
})

const AppContainer = createAppContainer(MainNavigator)

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
    )
  }
}

export default App