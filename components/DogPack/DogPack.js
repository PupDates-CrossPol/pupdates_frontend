import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'
import { Ionicons } from '@expo/vector-icons';
import DogCard from '../DogCard/DogCard'

class DogPackScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({        
        headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
          <Ionicons name="ios-arrow-back" size={30} color='rgb(53, 129, 252)' />
        </TouchableOpacity>
        ),
        headerTitle: () => <Image source={require('../../assets/DogPackSpread.png')} style={styles.navTitle}/>,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('AddDog')}>
            <Image source={require('../../assets/AddDog.png')} style={styles.logo} />
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
  // backToMenu: {
  //   flexDirection: 'row',
  //   marginLeft: 5,
  //   width: '25%',
  //   position: 'absolute',
  //   backgroundColor: 'transparent'
  // },
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

export const mapStateToProps = state => ({
  user: state.user,
})

export const mapDispatchToProps = dispatch => ({
  setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
  setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
})

export default connect (mapStateToProps, mapDispatchToProps)(DogPackScreen)