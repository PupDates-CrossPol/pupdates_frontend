import * as React from 'react';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

class ImageUpload extends React.Component {
	state = {
    image: null
  }

  render() {
  	let { image } = this.state;
  	return (
  		<SafeAreaView>
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
  		</SafeAreaView>
  	)
  }

  selectImg() {
    ImagePicker.requestCameraRollPermissionsAsync()
      .then(response => {
        if (response.granted === true) {
          ImagePicker.launchImageLibraryAsync()
            .then(response => {
            	this.uploadImg(response.uri, "Selected-Image");
            	this.setState({ image: response });
            }
        )
      }
    })
  }

  takeImg() {
    Camera.requestPermissionsAsync()
      .then(response => {
        if (response.granted === true) {
          ImagePicker.launchCameraAsync()
            .then(response => {
            	this.uploadImg(response.uri, "Taken-Image");
            	this.setState({ image: response });
            }
        )
      }
    })
  }

  uploadImg = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = firebase.storage().ref().child(`images/${imageName}`);
    return ref.put(blob)
  }
}

export default ImageUpload; 