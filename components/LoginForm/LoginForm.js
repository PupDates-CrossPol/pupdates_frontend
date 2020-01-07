import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux'
import { setUserInfo, setPackInfo, setPackPhotos, setOtherUsers } from '../../actions'

export class LoginScreen extends React.Component {
  state = {
    id: '',
    email: '',
    password: ''
  }

  async componentDidMount() {
    await Font.loadAsync({
      'major-mono-display': require('../../assets/fonts/MajorMonoDisplay-Regular.ttf'),
    });
  }

  updateEmail(email) {
    this.setState({ email })
  }

  updatePassword(password) {
    this.setState({ password })
  }

  getPackImages = async pack => {
    pack.forEach( async dog => {
      const dogImages = await apiCalls.getDogImagesById(dog.id)
      this.props.setPackPhotos(dogImages)
    })
  }

  getPackInfo = async userId => {
    const dogPackResponse = await apiCalls.getDogsForUser(userId)
    this.getPackImages(dogPackResponse)
    this.props.setPackInfo(dogPackResponse)
  }

  handleSubmit = async () => {
    const { email, password } = this.state
    const loginResponse = await apiCalls.loginUser(email, password)
    if (loginResponse.error) {
      //handle error response
    } else {
      this.props.setUserInfo(loginResponse)
      this.getPackInfo(loginResponse.id)
      const allUsers = await apiCalls.getAllUsers()
      const otherUsers = allUsers.filter(user => user.attributes.id !== loginResponse.id)
      this.props.setOtherUsers(otherUsers)
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image}/>
        <Text style={styles.title}>PupDates</Text>
        <TextInput placeholder="Email" style={styles.input} onChangeText={email => this.updateEmail(email)} value={this.state.email} autoCapitalize='none'/>
        <TextInput placeholder="Password" style={styles.input} onChangeText={password => this.updatePassword(password)} value={this.state.password} autoCapitalize='none'/>
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
        <LinearGradient
          colors={['orange', '#c32525']}
          style={styles.linearGradient}
        >
            <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
          </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  //   alignItems: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 90
  },
  image: {
    height: 140,
    width: 140,
  },
  title: {
    fontSize: 50,
    // fontFamily: 'major-mono-display'
  },
  input: {
    height: 30,
    width: '90%',
    borderColor: 'lightgrey',
    borderRadius: 50,
    // borderColor: 'rgba(33,33,33,0.81)',
    borderWidth: 1.5,
    padding: 10,
    height: 60,
    margin: 20,
    alignItems: 'center'
  },
  linearGradient: {
    width: '100%',
    borderRadius: 25,
    height: 50,
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
});


export const mapStateToProps = state => ({
  user: state.user,
  pack: state.pack,
  packPhotos: state.packPhotos,
  otherUsers: state.otherUsers
})

export const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
  setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures)),
  setOtherUsers: (otherUsers) => dispatch(setOtherUsers(otherUsers)),
  setPackPhotos: (dogPackPictures) => dispatch(setPackPhotos(dogPackPictures))
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen)

