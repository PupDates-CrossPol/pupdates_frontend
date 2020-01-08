
import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux'
import { setUserInfo, setPackInfo, setPackPhotos, setOtherUsers, setMatches} from '../../actions'
import KeyboardShift from '../KeyboardShift/KeyboardShift'

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

  getMatchesPackImages = async pack => {
    pack.forEach( async dog => {
      const dogImages = await apiCalls.getDogImagesById(dog.id)
      this.props.setMatchesPackImages(dogImages)
    })
  }

  getMatchesPackInfo = async matches => {
    if (!matches.length) {
      matches.forEach( match => {
        const dogPackResponse = await apiCalls.getDogsForUser(match.id)
        this.getMatchesPackImages(dogPackResponse)
        this.props.setMatchesPack(dogPackResponse)
      })
    } else {
      return
    }
  }

  handleSubmit = async () => {
    const { email, password } = this.state
    const loginResponse = await apiCalls.loginUser(email, password)
    if (loginResponse.error) {
      //handle error response
    } else {
      this.props.setUserInfo(loginResponse.attributes)
      this.getPackInfo(loginResponse.attributes.id)
      const allUsers = await apiCalls.getAllUsers()
      const otherUsers = allUsers.filter(user => user.attributes.id !== loginResponse.attributes.id)
      this.props.setOtherUsers(otherUsers)
      const matches = await apiCalls.getMatchesForUser(loginResponse.attributes.id)
      this.props.setMatches(matches)
      this.getMatchesPackInfo(matches)
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
        <KeyboardShift>
          {() => (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoTitle}>
          <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image}/>
          <Image source={require('../../assets/PupDatesTitleSpread.png')} style={styles.navTitle}/>
        </View>

            <View style={styles.loginCredentials}>
              <TextInput placeholder="Email" style={styles.input} onChangeText={email => this.updateEmail(email)} value={this.state.email} autoCapitalize='none'/>
              <TextInput placeholder="Password" style={styles.input} onChangeText={password => this.updatePassword(password)} value={this.state.password} autoCapitalize='none'/>
              <Text style={styles.forgotPassowrdText}>Forgot Password?</Text>
            </View>

        <View style={styles.loginContainer}>
          <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
              <LinearGradient
                colors={['rgb(246, 146, 30)', 'rgb(246, 41, 123)']}
                style={styles.linearGradient}>
                  <Text style={styles.buttonText}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
          <Text style={styles.forgotPassowrdText}>Create Account</Text>
        </View>
      </SafeAreaView>
        )}
      </KeyboardShift>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  logoTitle: {
    alignItems: 'center',
  },
  image: {
    height: 140,
    width: 140,
  },
  navTitle: {
    width: 160,
    height: 40,
  },
  loginCredentials: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 30,
    width: '80%',
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
    borderWidth: 1.5,
    padding: 10,
    height: 60,
    marginBottom: 15,
    alignItems: 'center',
    fontSize: 25,
    paddingLeft: 30,
  },
  forgotPassowrdText: {
    color: 'rgba(0,0,0,0.4)',
    fontSize: 20,
    marginBottom: 15,
  },
  loginContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    // borderRadius: 50,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    marginBottom: 15,
  },
  linearGradient: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
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
  otherUsers: state.otherUsers,
  matches: state.matches,
})

export const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
  setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures)),
  setOtherUsers: (otherUsers) => dispatch(setOtherUsers(otherUsers)),
  // setPackPhotos: (dogPackPictures) => dispatch(setPackPhotos(dogPackPictures)),
  setMatches: (userMatches) => dispatch(setMatches(userMatches)),
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen)

