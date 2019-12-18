import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import * as Constants from 'expo-constants';

export default class App extends React.Component {
  state = {
    image: null
  }

  render() {
    let { image } = this.state
    return (
      <View style={styles.container}>
        <Text>PupDates</Text>
        <Button 
          onPress={() => this.selectImg()}
          title="Add Photo"
        />
        <Button 
          onPress={() => this.takeImg()}
          title="Camera"
        />
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

takeImg() {
  Camera.requestPermissionsAsync()
    .then(response => {
      if (response.granted === true) {
        ImagePicker.launchCameraAsync()
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