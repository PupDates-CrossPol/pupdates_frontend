import * as React from 'react';
import { StyleSheet,  View, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";
import { getDogImagesById } from '../../apiCalls'
import { setSwipeUser, setOtherUsers, setSwipePack, setSwipePackPhotos } from '../../actions'
import { connect } from 'react-redux'
import * as apiCalls from '../../apiCalls'
import { SwipeDogCard } from '../SwipeDogCard/SwipeDogCard'

export class HomeScreen extends React.Component {
  state = {
    image: null,
    dogImages: []
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
    headerTitle: () => <Image source={require('../../assets/PupDatesTitleSpread.png')} style={styles.navTitle}/>,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="ios-menu" size={50} color='rgb(21, 112, 125)' />
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
  });

  async componentDidMount() {
   await Font.loadAsync({
      'major-mono-display': require('../../assets/fonts/MajorMonoDisplay-Regular.ttf'),
    });
    // const dogImages = await getDogImagesById(4)
    this.getRandomUser()
    // this.setState({dogImages: dogImages.map( dog => dog.image_url)});
  }
  
 
 getRandomUser = () => {
   let randomIndex = Math.floor(Math.random() * this.props.otherUsers.length)
   let selectedUser = this.props.otherUsers[randomIndex]
   this.props.setSwipeUser(selectedUser)
   this.props.otherUsers.splice(randomIndex, 1)
   this.getSwipePack(selectedUser.id)
 }


 getSwipePack = async (selectedUserId) => {
  const swipePackResponse = await apiCalls.getDogsForUser(selectedUserId)
  this.getSwipePackImages(swipePackResponse)
  this.props.setSwipePack(swipePackResponse)
 
 }

 getSwipePackImages = async (swipePack) => {
    swipePack.forEach( async dog => {
     const swipePics = await apiCalls.getDogImagesById(dog.attributes.id)
     this.props.setSwipePackPhotos(swipePics)
     console.log('props swipe pics', this.props.swipePackPhotos)
     
    })
 }

render() {
    if (this.props.swipeUser === undefined || this.props.swipePackPhotos.length === 0 || this.props.swipePack.length === 0) {
      return null
    }
    return (
      <SafeAreaView>
      <ScrollView>
      <Container>
      <Content>
      <Text style={styles.packName}>{this.props.swipeUser.attributes.first_name}'s Pack</Text>
        <SwipeDogCard
        swipePack={this.props.swipePack}
        swipePackPhotos={this.props.swipePackPhotos}
        swipeUser={this.props.swipeUser} />
      </Content>
    </Container>
    </ScrollView>
    <View style={styles.pawBtn}>
              <TouchableOpacity style={styles.button} onPress={() => console.log('DISLIKE')}>
                <Ionicons name="ios-thumbs-down" size={60} color="rgba(0,0,0,0.2)" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => console.log('LIKE')}>
                <Ionicons name="md-paw" size={60} color="rgba(0,0,0,0.2)"/>
              </TouchableOpacity>
     </View>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // marginTop: 90
  },
  logo: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 50,
  },
  imageCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  infoCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '80%'
  },
  packName: {
    fontSize: 25,
    textAlign: 'center'
  },
  imageCardContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 350,
  },

  imageCardContentText: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 250,
    width: '80%'
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
    marginRight: 10,  
},
leftNavIcon: { 
  marginLeft: 10,  
  marginBottom: 5, 
},
  image: {
    height: 325,
    width: 275,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3.5,
    borderRadius: 50,
    alignSelf: 'center'
  },
  infoText: {
    textAlign: 'left',
    fontSize: 20,
    color: 'grey',
    alignSelf: 'stretch'
  },
  infoTextName: {
    fontSize: 30
  },
  infoBody: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left',
    height: 50
  },
  roundBtn: {
    width: 40
  },
  pawBtn: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center'
    // marginBottom: '5%'
  },
});

export const mapStateToProps = state => ({
  swipeUser: state.swipeUser,
  user: state.user,
  otherUsers: state.otherUsers,
  swipePack: state.swipePack,
  swipePackPhotos: state.swipePackPhotos
})

export const mapDispatchToProps = dispatch => ({
  setSwipeUser: (swipeUser) => dispatch(setSwipeUser(swipeUser)),
  setOtherUsers: (otherUsers) => dispatch(setOtherUsers(otherUsers)),
  setSwipePack: (swipePack) => dispatch(setSwipePack(swipePack)),
  setSwipePackPhotos: (swipePackPhotos) => dispatch(setSwipePackPhotos(swipePackPhotos))
})

export default connect (mapStateToProps, mapDispatchToProps)(HomeScreen)


// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });



// export default createAppContainer(AppNavigator)