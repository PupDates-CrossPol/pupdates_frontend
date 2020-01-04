import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ImageUpload from '../ImageUpload/ImageUpload';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux'
import { setUserInfo, setPackInfo } from '../../actions'


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
    const dogPackWithPictures = pack.map( async dog => {
      const dogImages = await apiCalls.getDogImagesById(dog.id)
      return dogImages
    })
  }

  getPackInfo = async userId => {
    const dogPackResponse = await apiCalls.getDogsForUser(userId)
    const dogPackWithPictures = dogPackResponse.map( async dog => {
      dog.images = await apiCalls.getDogImagesById(dog.id)
       console.log('ln30 - dog', dog);
      return dog
    })
    console.log('ln41-dogPackWithPictures', dogPackWithPictures);
    
    this.props.setPackInfo(dogPackWithPictures)
  }

  handleSubmit = async () => {
    const { email, password } = this.state
    const loginResponse = await apiCalls.loginUser(email, password)
    if (loginResponse.error) {
      //handle error response
    } else {
      this.props.setUserInfo(loginResponse)
      this.getPackInfo(loginResponse.id)
      this.props.navigation.navigate('Home');
    }
  }

  confirmPassword = async () => {
    const response = await fetch('http://node-pupdates-backend.herokuapp.com/api/v1/users')
    const users = await response.json();
    const currentUser = users.find(user => user.email === this.state.email)
    if (currentUser.password === this.state.password) {
      this.setState({ id: currentUser.id });
      this.props.navigation.navigate('Home');
    }
  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image}/>
        <Text style={styles.title}>PupDates</Text>
        <TextInput placeholder="Email" style={styles.input} onChangeText={email => this.updateEmail(email)} value={this.state.email}/>
        <TextInput placeholder="Password" style={styles.input} onChangeText={password => this.updatePassword(password)} value={this.state.password}/>
        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
        <LinearGradient
          colors={['orange', '#c32525']}
          style={styles.linearGradient}
          onPress={() => console.log('does this work?')}
        >
            <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
          </TouchableOpacity>
        <ImageUpload />
      </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
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
    width: '70%',
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
    width: '70%',
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

// const AppNavigator = createSwitchNavigator({
//   Login: {
//     screen: LoginScreen,
//   },
// });

export const mapStateToProps = state => ({
  user: state.user,
  pack: state.pack
})

export const mapDispatchToProps = dispatch => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack))
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginScreen)

// export default createAppContainer(AppNavigator)