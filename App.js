import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    image: null
  }

  componentDidMount() {
    Font.loadAsync({
      'major-mono-display': require('./assets/fonts/MajorMonoDisplay-Regular.ttf'),
    });
  }

  render() {
    let { image } = this.state
    return (
      <View style={styles.container}>
        <Image source={require('./assets/PupDatesLogo.png')} style={styles.image}/>
        <Text style={styles.title}>PupDates</Text>
        {/* <Text onPress={() => this.selectImg()}>Open up App.js to start working on your app!</Text> */}
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
    marginTop: 70
    // justifyContent: 'center',
  },
  image: {
    height: 140,
    width: 140,
  },
  title: {
    fontSize: 50,
    fontFamily: 'major-mono-display'
  }
});