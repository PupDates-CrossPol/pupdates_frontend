import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LoginScreen extends React.Component {
  state = {
    image: null
  }

  async componentDidMount() {
    await Font.loadAsync({
      'major-mono-display': require('../../assets/fonts/MajorMonoDisplay-Regular.ttf'),
    });
  }

  render() {
    let { image } = this.state
    return (
      <SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image}/>
        <Text style={styles.title}>PupDates</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
        <LinearGradient
          colors={['orange', '#c32525']}
          style={styles.linearGradient}
          onPress={() => console.log('does this work?')}
        >
            <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
          </TouchableOpacity>
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
      </ScrollView>
      </SafeAreaView>
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

const AppNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen,
  },
});

export default createAppContainer(AppNavigator)