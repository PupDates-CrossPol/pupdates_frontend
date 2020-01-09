import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux'
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';
import Match from '../Match/Match'

class MatchesScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({        
        headerLeft: () => (
          <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('Menu')}>
            <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
          </TouchableOpacity>
          ),
        headerTitle: () => <Image source={require('../../assets/MatchesSpread.png')} style={styles.navTitle}/>,
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
        console.log('this.props', this.props.matches);
        
        if (!this.props.matches.length) {
          return (
            <SafeAreaView>
              <View style={styles.logoTitle}>
                <Image source={require('../../assets/PupDatesLogo.png')} style={styles.image}/>
                <Text style={styles.forgotPassowrdText}>No Matches Yet</Text>
              </View>
            </SafeAreaView>
          )
        } else {
          return (
                <ScrollView>
                  <View >
                    <View style={styles.matches}>
                      <Match />
                    </View>
                  </View>
                </ScrollView>
          )
        }
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
    logoTitle: {
      alignItems: 'center',
      marginTop: '50%'
    },
    logo: {
        height: 40,
        width: 40,
    }, 
    backArrow: {
      marginLeft: 5,
    },
    image: {
      height: 140,
      width: 140,
    },
    title: {
      fontSize: 50,
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
    leftNavIcon: { marginLeft: 10,  marginBottom: 5, },
    forgotPassowrdText: {
      color: 'rgba(0,0,0,0.4)',
      fontSize: 20,
      marginBottom: 15,
    },
    image: {
      height: 140,
      width: 140,
    },
  });

export const mapStateToProps = state => ({
  pack: state.pack,
  matches: state.matches,
})

export default connect (mapStateToProps)(MatchesScreen)