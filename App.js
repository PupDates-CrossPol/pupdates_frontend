import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

export default class App extends React.Component {
  state = {
    image: null
  }

  render() {
    let { image } = this.state
    return (
      <View style={styles.container}>
        <Text onPress={() => this.selectImg()}>Open up App.js to start working on your app!</Text>
        {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      </View>
    );
  }

selectImg() {
  ImagePicker.requestCameraRollPermissionsAsync()
    .then(response => {
      if (response.granted === true) {
        ImagePicker.launchImageLibraryAsync()
          .then(response => this.setState({ image: response.uri }))
      }
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});