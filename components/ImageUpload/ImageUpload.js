import * as React from 'react';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import { setUserInfo, setPackInfo, setPackPhotos, setTempUserImage, setImageUpload } from '../../actions';

class ImageUpload extends React.Component {
	state = {
    id: '',
    tempUserImage: null,
    images: []
  }

  render() {
  	return (
  		<SafeAreaView>
        <TouchableOpacity style={styles.button} onPress={() => this.selectImg()}>
          <LinearGradient
            colors={['orange', '#c32525']}
            style={styles.linearGradient}
          >
              <Text style={styles.buttonText}>Choose From Library</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.takeImg()}>
          <LinearGradient
            colors={['orange', '#c32525']}
            style={styles.linearGradient}
          >
              <Text style={styles.buttonText}>Take A Photo</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.addImg()}>
          <LinearGradient
            colors={['orange', '#c32525']}
            style={styles.linearGradient}
          >
              <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.setImageUpload(null)}>
          <LinearGradient
            colors={['gray', 'black']}
            style={styles.linearGradient}
          >
              <Text style={styles.buttonText}>Cancel</Text>
          </LinearGradient>
        </TouchableOpacity>
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
            	this.props.setTempUserImage(response.uri);
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
            	this.props.setTempUserImage(response.uri);
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
    const { id, email, first_name, last_name, description } = this.props.user
    this.props.setTempUserImage(null);
    const url = await firebase.storage().ref().child(`images/${this.state.id}`).getDownloadURL();
    this.setState({ images: [...this.state.images, url]});
    this.props.setUserInfo({ description, email, first_name, id, last_name, photo: url })
    const user = await apiCalls.patchUserPhoto(url, id)
    this.props.setImageUpload(null);
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '80%',
    height: 40,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // borderRadius: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  }
})

export const mapStateToProps = state => ({
  user: state.user,
  pack: state.pack,
  packPhotos: state.packPhotos,
  tempUserImage: state.tempUserImage,
  imageUpload: state.imageUpload
})

export const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
  setPackPhotos: (dogPackPictures) => dispatch(setPackPhotos(dogPackPictures)),
  setTempUserImage: (tempUserImage) => dispatch(setTempUserImage(tempUserImage)),
  setImageUpload: (imageUpload) => dispatch(setImageUpload(imageUpload))
})

export default connect (mapStateToProps, mapDispatchToProps)(ImageUpload)