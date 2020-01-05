import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DogCard from '../DogCard/DogCard'

export default class DogPackScreen extends React.Component {
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
          <SafeAreaView style={styles.container}>
            <View style={styles.componentTitleHeader} >
                <TouchableOpacity style={styles.backToMenu} onPress={() => this.props.navigation.navigate('Menu')}>
                  <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
                  <Text style={styles.backToMenuText} >Menu</Text>
                </TouchableOpacity>
                <Text style={styles.componentTitle} >Dog Pack</Text>
            </View>
            <ScrollView>
            <View >
              <View style={styles.matches}>
                <DogCard  />
              </View>
            </View>
            </ScrollView>
          </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matches: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
    backgroundColor: 'transparent'
    // fontFamily: 'major-mono-display'
  },
  componentTitleHeader: {
    backgroundColor: 'transparent'
  },
  backToMenu: {
    flexDirection: 'row',
    marginLeft: 5,
    width: '25%',
    position: 'absolute',
    backgroundColor: 'transparent'
  },
  backToMenuText: {
    fontSize: 25,
    color: 'rgb(53, 129, 252)',
    marginLeft: 5,
    backgroundColor: 'transparent'
  },
  componentTitle: {
    alignSelf: 'center',
    color: 'rgba(0,0,0,0.57)',
    fontSize: 30,
    fontWeight: '300',
    backgroundColor: 'transparent'
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
// const AppNavigator = createStackNavigator({
//     DogPack: {
//         screen: DogPackScreen,
//     },
// });
//   export default createAppContainer(AppNavigator)