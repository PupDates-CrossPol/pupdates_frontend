import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Home: {screen: HomeScreen},
    HumanProfile: {screen: HumanProfileScreen},
    Menu: {screen: MenuScreen},
    Matches: {screen: MatchesScreen},
  },
  {
    initialRouteName: 'HomeScreen',
  });

const App = createAppContainer(MainNavigator);

export default App;