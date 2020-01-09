import * as React from 'react';
import firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import { setUserInfo, setPackInfo, setPackPhotos, setTempUserImage, setImageUpload, setModalState, setNewDogAddImage } from '../../actions';
import ApiKeys from '../../ApiKeys';


firebase.initializeApp(ApiKeys.firebaseConfig);

class ImageUpload extends React.Component {
	state = {
    id: '',
    dogImages: [],
    loading: false
  }

  render() {
  	return (
  		<SafeAreaView style={styles.addImagesContainer}>
      {this.state.loading && <Text style={styles.loadingText}>Loading...</Text>}
        <TouchableOpacity style={styles.topButton} onPress={() => this.selectImg()}>
              <Text style={styles.buttonText}>Choose From Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => this.takeImg()}>
              <Text style={styles.buttonText}>Take A Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => this.props.setModalState(this.props.modalState)
          }>
              <Text style={styles.buttonText}>Cancel</Text>
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
              setTimeout(this.addImg, 5000)
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
              setTimeout(this.addImg, 5000)
            }
        )
      }
    })
      .catch(error => console.log(error))
  }

  uploadImg = async (uri, imageId) => {
    this.setState({loading: true})
    const response = await fetch(uri);
    const blob = await response.blob();

    let ref = firebase.storage().ref().child(`images/${imageId}`);
    return ref.put(blob)
  }

  addImg = async () => {
    const { id, email, first_name, last_name, description } = this.props.user
    const url = await firebase.storage().ref().child(`images/${this.state.id}`).getDownloadURL();
    if (this.props.currentComponent === 'User') {
      this.props.setUserInfo({ description, email, first_name, id, last_name, image: url })
      const user = await apiCalls.patchUserImage(url, id)
    } else {
      this.props.setNewDogAddImage(url);
    }
    this.props.setTempUserImage(null);
    this.props.setModalState(this.props.modalState)
    this.setState({loading: false})
  }
}

const styles = StyleSheet.create({
  addImagesContainer: {
    position: 'absolute',
    bottom: 0,
    width: '95%',
    alignSelf: 'center'
  },
  linearGradient: {
    width: '100%',
    height: 40,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topButton: {
    height: 50,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: 'black',
    marginBottom: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 1
  },
  bottomButton: {
    height: 50,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: 'black',
    marginTop: 0,
  },
  buttonText: {
    color: '#000',
    fontSize: 25,
  },
  cancelButton: {
    height: 50,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 5,
  },
  loadingText: {
      fontSize: 25,
      fontWeight: '400',
      marginLeft: 85,
      marginBottom: 15
    },
})

export const mapStateToProps = state => ({
  user: state.user,
  pack: state.pack,
  packPhotos: state.packPhotos,
  tempUserImage: state.tempUserImage,
  imageUpload: state.imageUpload,
  modalState: state.modalState,
  newDogImages: state.newDogImages
})

export const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
  setPackPhotos: (dogPackPictures) => dispatch(setPackPhotos(dogPackPictures)),
  setTempUserImage: (tempUserImage) => dispatch(setTempUserImage(tempUserImage)),
  setImageUpload: (imageUpload) => dispatch(setImageUpload(imageUpload)),
  setModalState: (modalState) => dispatch(setModalState(modalState)),
  setNewDogAddImage: (newDogImages) => dispatch(setNewDogAddImage(newDogImages))
})

export default connect (mapStateToProps, mapDispatchToProps)(ImageUpload)