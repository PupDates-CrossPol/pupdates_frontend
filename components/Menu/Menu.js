import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'

export class MenuScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({        
        headerLeft: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
        headerTitle: () => <Image source={require('../../assets/MenuSpread.png')} style={styles.navTitle}/>,
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
                <View style={styles.container}>
                    <View style={styles.menuOptions}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Matches')} style={styles.menuImgText}>
                        <Image source={require('../../assets/PupDatesLogo.png')} style={styles.menuCircle} />
                        <Text style={styles.menuOptionsText} >Matches</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.menuOptions}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfile')} style={styles.menuImgText}>
                        <Image source={{uri: this.props.user.image}} style={styles.menuCircle} />
                        <Text style={styles.menuOptionsText} >{this.props.user.first_name}</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.menuOptionsBottom}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('DogPack')} style={styles.menuImgText}>
                        <Image source={{uri: this.props.packPhotos[0].image_url}} style={styles.menuCircle} />
                        <Text style={styles.menuOptionsText} >Dog Pack</Text>
                      </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '2%',
      marginBottom: '2%'
    },
    menuOptions: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomColor: 'rgba(0,0,0,0.57)',
      borderBottomWidth: 1,
      width: '75%',
    },
    menuOptionsBottom: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
    },
    menuImgText: {
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 10,
      width: '100%',
    },
    menuOptionsText: {
      fontSize: 25,
      fontWeight: '300',
      marginTop: 5,
    }, 
    menuOptionsTextSub: {
      color: 'rgba(0,0,0,0.57)',
      fontSize: 25,
      fontWeight: '300',
    },
    menuCircle: {
      aspectRatio: 1/1,
      height: '65%',
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 2,
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

  export default connect (mapStateToProps)(MenuScreen)
// const AppNavigator = createStackNavigator({
//     Menu: {
//         screen: MenuScreen,
//     },
// });
//   export default createAppContainer(AppNavigator)

// export default MenuScreen;