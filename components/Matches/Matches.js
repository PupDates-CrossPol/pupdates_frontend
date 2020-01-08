import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../Home/Home'
import { Ionicons } from '@expo/vector-icons';
import Match from '../Match/Match'

export default class MatchesScreen extends React.Component {
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
              <ScrollView>
                <View >
                  <View style={styles.componentTitleHeader}>
                      <TouchableOpacity style={styles.backToMenu} onPress={() => this.props.navigation.navigate('Menu')}>
                        <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
                        <Text style={styles.backToMenuText} >Menu</Text>
                      </TouchableOpacity>
                      <Text style={styles.componentTitle} >Matches</Text>
                  </View>
                  <View style={styles.matches}>
                    <Match matches={sampleMatches} />
                  </View>
                </View>
              </ScrollView>
        )
    }
}
const sampleMatches = [
  {
    userName: 'Jordan',
    userEmail: 'jordanjohnson@email.com',
    userImage: 'https://lightroom.adobe.com/v2c/spaces/ee22bd2ae491408888e3e5ffb99696e4/assets/1b122fb0d190431db1d313f7c4221516/revisions/504f331b6a34459abad9c60b5af884c1/renditions/5e6818b84dd3757eac8988c6928b7d92',
    pack: ['https://lightroom.adobe.com/v2c/spaces/997de26b6efb4e14869d673f387e8d76/assets/338b49ac421a43e7a2426fdf6c597b56/revisions/d05d5655a0b9440d91b9fcd0f2062f46/renditions/fdb85e2ae7c2b1811296dedfb5376e30']
  },
  {
    userName: 'Tyler',
    userEmail: 'tylersmith@email.com',
    userImage: 'https://lightroom.adobe.com/v2c/spaces/ee22bd2ae491408888e3e5ffb99696e4/assets/1b122fb0d190431db1d313f7c4221516/revisions/504f331b6a34459abad9c60b5af884c1/renditions/5e6818b84dd3757eac8988c6928b7d92',
    pack: ['https://lightroom.adobe.com/v2c/spaces/c393e3c850474b189f1065187d688a5c/assets/8e2864cbc2d6404caed72b42e6af8a9d/revisions/c430388e3268b503d43f0f3563b0cfaa/renditions/2c2b7f3832532454edbf44d4e984aa97', 'https://lightroom.adobe.com/v2c/spaces/f6e527e0e02d47ce8a1c06a03b7e7d98/assets/10f0ca254e4e4cd4a991446088be4cfc/revisions/368a48abcbc89120a875a853dd6f1619/renditions/aa44d8688c748a3c0bb32565a4a687f4']
  },
  {
    userName: 'Sara(h)',
    userEmail: 'sarajones@email.com',
    userImage: 'https://lightroom.adobe.com/v2c/spaces/9b26d61cec7340ff9fcce8cf84bbf59b/assets/fbd5c280a5b84ba2bd19178b904ce419/revisions/c80ba2fa1b2b427faad57e47bfdfd606/renditions/ae57249d984d4515c3d5a1b71c740fbb',
    pack: ['https://lightroom.adobe.com/v2c/spaces/c393e3c850474b189f1065187d688a5c/assets/8e2864cbc2d6404caed72b42e6af8a9d/revisions/c430388e3268b503d43f0f3563b0cfaa/renditions/2c2b7f3832532454edbf44d4e984aa97', 'https://lightroom.adobe.com/v2c/spaces/8e4779e58dac4ccbb7e10436df96677d/assets/b3a698c42adf48be93943f14b25d8760/revisions/03bcf2de31048faa936635b5d0eecc52/renditions/c9a6a4dd33dd308f4f91a75366c78b7c',  'https://lightroom.adobe.com/v2c/spaces/997de26b6efb4e14869d673f387e8d76/assets/338b49ac421a43e7a2426fdf6c597b56/revisions/d05d5655a0b9440d91b9fcd0f2062f46/renditions/fdb85e2ae7c2b1811296dedfb5376e30']
  }
]

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
      // fontFamily: 'major-mono-display'
    },
    componentTitleHeader: {
      marginTop: '2%',
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
// const AppNavigator = createStackNavigator({
//     Matches: {
//         screen: MatchesScreen,
//     },
// });
//   export default createAppContainer(AppNavigator)

// export default MatchesScreen;