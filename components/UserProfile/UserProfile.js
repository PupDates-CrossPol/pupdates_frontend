import * as React from 'react';
import * as apiCalls from '../../apiCalls';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { setUserInfo, setPackInfo, setPackPhotos, setTempUserImage, setImageUpload } from '../../actions';
import ImageUpload from '../ImageUpload/ImageUpload';

class UserProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({        
        headerLeft: () => (
          <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Menu')}>
            <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
          </TouchableOpacity>
          ),
        headerTitle: () => <Image source={require('../../assets/ProfileSpread.png')} style={styles.navTitle}/>,
        headerRight: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
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
              <View style={styles.componentTitleHeader}>
                  <TouchableOpacity style={styles.imageBtn} onPress={() =>this.props.setImageUpload(<ImageUpload />)
                  }>
                    {this.props.tempUserImage && <Image source={{uri: this.props.tempUserImage}} style={styles.userImage}/>}
                    {!this.props.tempUserImage && <Image source={{uri: this.props.user.image}} style={styles.userImage}/>}
                  </TouchableOpacity>
                  {this.props.imageUpload && <View>{this.props.imageUpload}</View>}
                  <Text style={styles.infoHeader}>About Me:</Text>
                  <Text style={styles.userInfoText}>First Name: {this.props.user.first_name}</Text>
                  <Text style={styles.userInfoText}>Last Name: {this.props.user.last_name}</Text>
                  <Text style={styles.userInfoText}>Email: {this.props.user.email}</Text>
                  <Text style={styles.infoHeader}>Description:</Text>
                  <Text style={styles.userInfoText}>{this.props.user.description}</Text>
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
    backArrow: {
      marginLeft: 5,
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
      paddingLeft: 65,
      color: 'rgba(0,0,0,0.57)',
    },
    infoHeader: {
      fontSize: 25,
      color: 'rgb(21, 112, 125)',
      marginLeft: 5,
      paddingLeft: 15,
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