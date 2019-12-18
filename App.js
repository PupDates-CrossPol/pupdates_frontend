import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    image: null
  }

  async componentDidMount() {
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
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input}/>
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
  },
  input: {
    height: 30,
    width: '70%',
    borderColor: 'black',
    borderRadius: 50,
    borderColor: 'rgba(33,33,33,0.81)',
    borderWidth: 1.5,
    padding: 10,
    height: 60,
    margin: 20,
    alignItems: 'center'
  }
});