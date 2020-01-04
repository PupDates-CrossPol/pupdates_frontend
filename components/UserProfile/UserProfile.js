import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';
import ImageUpload from '../ImageUpload/ImageUpload';
import { connect } from 'react-redux';

class UserProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({        
        headerLeft: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
        headerTitle: () => <Image source={require('../../assets/PupDatesTitleSpread.png')} style={styles.navTitle}/>,
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="ios-close" size={50} color='rgb(21, 112, 125)' />
            </TouchableOpacity>
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeftContainerStyle: styles.leftNavIcon,
        headerRightContainerStyle: styles.rightNavIcon,
      })

    render() {
      console.log(this.props.user)
        return (
            <SafeAreaView>
                <View>
                  <View style={styles.componentTitleHeader}>
                      <TouchableOpacity style={styles.backToMenu} onPress={() => this.props.navigation.navigate('Menu')}>
                        <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
                        <Text style={styles.backToMenuText} >Menu</Text>
                      </TouchableOpacity>
                      <Text style={styles.componentTitle} >{this.props.user.first_name}</Text>
                      <Image source={{uri: this.props.user.photo}} style={{ width: 200, height: 200 }}/>
                      <Text>About Me:</Text>
                      <Text>First Name: {this.props.user.first_name}</Text>
                      <Text>Last Name: {this.props.user.last_name}</Text>
                      <Text>Email: {this.props.user.email}</Text>
                      <Text>Description:</Text>
                      <Text>{this.props.user.description}</Text>
                  </View>
                <ImageUpload />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop: 90
    },
    logo: {
        height: 40,
        width: 40,
    }, 
    image: {
      height: 140,
      width: 140,
    },
    title: {
      fontSize: 50,
      // fontFamily: 'major-mono-display'
    },
    backToMenu: {
      flexDirection: 'row',
      marginLeft: 5,
      width: '25%',
      position: 'absolute'
    },
    backToMenuText: {
      fontSize: 25,
      color: 'rgb(53, 129, 252)',
      marginLeft: 5,
    },
    componentTitle: {
      alignSelf: 'center',
      color: 'rgba(0,0,0,0.57)',
      fontSize: 30,
      fontWeight: '300',
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
    },
    navTitle: {
        width: 160,
        height: 40,
        marginBottom: 5,
    },
    rightNavIcon: { 
        marginRight: 20,  
        marginBottom: 10, 
    },
    leftNavIcon: { marginLeft: 10,  marginBottom: 5, }
  });

  export const mapStateToProps = state => ({
    user: state.user,
    packPhotos: state.packPhotos
  })

  export default connect (mapStateToProps)(UserProfileScreen)
// const AppNavigator = createStackNavigator({
//     UserProfile: {
//         screen: UserProfileScreen,
//     },
// });
//   export default createAppContainer(AppNavigator)