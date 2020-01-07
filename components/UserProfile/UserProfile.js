import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';
import ImageUpload from '../ImageUpload/ImageUpload';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import { setUserInfo, setPackInfo, setPackPhotos, setTempUserImage, setImageUpload } from '../../actions';

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
        return (
            <SafeAreaView>
                <View>
                  <View style={styles.componentTitleHeader}>
                      <TouchableOpacity style={styles.backToMenu} onPress={() => {
                            this.props.navigation.navigate('Menu')
                            this.props.setImageUpload(null)
                          }
                        }>
                        <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
                        <Text style={styles.backToMenuText} >Menu</Text>
                      </TouchableOpacity>
                      <Text style={styles.componentTitle} >{this.props.user.first_name}</Text>
                      <TouchableOpacity style={styles.imageBtn} onPress={() =>this.props.setImageUpload(<ImageUpload />)
                      }>
                        {this.props.tempUserImage && <Image source={{uri: this.props.tempUserImage}} style={styles.userImage}/>}
                        {!this.props.tempUserImage && <Image source={{uri: this.props.user.photo}} style={styles.userImage}/>}
                      </TouchableOpacity>
                      {this.props.imageUpload && <View>{this.props.imageUpload}</View>}
                      <Text style={styles.infoHeader}>About Me:</Text>
                      <Text style={styles.userInfoText}>First Name: {this.props.user.first_name}</Text>
                      <Text style={styles.userInfoText}>Last Name: {this.props.user.last_name}</Text>
                      <Text style={styles.userInfoText}>Email: {this.props.user.email}</Text>
                      <Text style={styles.infoHeader}>Description:</Text>
                      <Text style={styles.userInfoText}>{this.props.user.description}</Text>
                  </View>
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
      position: 'absolute',
      padding: 10
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
      padding: 10
    },
    imageBtn: {
      height: 265,
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'rgba(0,0,0,0.57)',
      borderBottomWidth: 1,
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 2, }, 
      shadowOpacity: 0.25, 
      shadowRadius: 3.84, 
      elevation: 5,
      marginLeft: 55,
      marginRight: 55
    },
    userImage: {
      aspectRatio: 1/1,
      height: 199,
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 2,
      // marginLeft: 100,
      // padding: 20
    },
    userInfoText: {
      fontSize: 20,
      fontWeight: '300',
      marginTop: 5,
      paddingLeft: 45
    },
    infoHeader: {
      fontSize: 25,
      color: 'rgb(53, 129, 252)',
      marginLeft: 5,
      paddingLeft: 10,
      marginBottom: 20,
      marginTop: 20,
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
      width: '20%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 100,
      // borderTopRightRadius: 20,
      // borderBottomRightRadius: 20,
      // borderBottomLeftRadius: 20,
      // borderTopLeftRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      marginTop: 0
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
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

export default connect (mapStateToProps, mapDispatchToProps)(UserProfileScreen)
// const AppNavigator = createStackNavigator({
//     UserProfile: {
//         screen: UserProfileScreen,
//     },
// });
//   export default createAppContainer(AppNavigator)