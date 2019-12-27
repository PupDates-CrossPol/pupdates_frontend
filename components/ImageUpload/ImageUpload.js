import * as React from 'react';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

class ImageUpload extends React.Component {
	state = {
    id: '',
    image: null,
    images: []
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
        <Button 
          onPress={() => this.addImg()}
          title="Submit"
        />
        {image &&
            <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
  		</SafeAreaView>
  	)
  }

  selectImg() {
    this.setState({ id: '' + Math.random().toString(36).substr(2, 9) });
    ImagePicker.requestCameraRollPermissionsAsync()
      .then(response => {
        if (response.granted === true) {
          ImagePicker.launchImageLibraryAsync()
            .then(response => {
            	this.uploadImg(response.uri, `${this.state.id}`);
            	this.setState({ image: response.uri });
            }
        )
      }
    })
      .catch(error => console.log(error))
  }

  takeImg() {
    this.setState({ id: '' + Math.random().toString(36).substr(2, 9) });
    Camera.requestPermissionsAsync()
      .then(response => {
        if (response.granted === true) {
          ImagePicker.launchCameraAsync()
            .then(response => {
            	this.uploadImg(response.uri, `${this.state.id}`);
            	this.setState({ image: response.uri });
            }
        )
      }
    })
      .catch(error => console.log(error))
  }

  uploadImg = async (uri, imageId) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = firebase.storage().ref().child(`images/${imageId}`);
    return ref.put(blob)
  }

  addImg = async () => {
    this.setState({ image: null });
    const url = await firebase.storage().ref().child(`images/${this.state.id}`).getDownloadURL();
    this.setState({ images: [...this.state.images, url]});
  }
}

export default ImageUpload; 