import * as React from 'react';
// import { Button, View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component { 
    render() {
        return (<></>)
    }
}

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
  });

  export default createAppContainer(AppNavigator);