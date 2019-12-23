import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';

class MenuScreen extends React.Component {
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
                <View style={styles.container}>
                    <Text style={styles.componentTitle} >Menu</Text>
                    <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image} onPress={() => console.log('wooooof')} />
                    <Button onPress={() => this.props.navigation.navigate('Home')} title="Go Home" />
                    <Button onPress={() => this.props.navigation.navigate('DogPack')} title="Go to DogPack" />
                    <Button onPress={() => this.props.navigation.navigate('UserProfile')} title="Go to User Profile" />
                    <Button onPress={() => this.props.navigation.navigate('Matches')} title="Go to Matches" />
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
    componentTitle: {
      color: 'rgba(0,0,0,0.57)',
      fontSize: 30,
      fontWeight: '300',
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
const AppNavigator = createStackNavigator({
    Menu: {
        screen: MenuScreen,
    },
});
  export default createAppContainer(AppNavigator)