import * as React from 'react';
import { StyleSheet,  View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as Camera from 'expo-camera';
import * as Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

class HomeScreen extends React.Component {
  state = {
    image: null
  }

  static navigationOptions = ({navigation}) => ({
    headerLeft: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
    headerTitle: () => <Image source={require('../../assets/PupDatesTitleSpread.png')} style={styles.navTitle}/>,
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Ionicons name="ios-menu" size={50} color='rgb(21, 112, 125)'/>
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
  }

  render() {
    return (

      <Container>
      <Content>
        <Card style={styles.imageCard}>
          <Text style={styles.packName}> Jordan's Pack </Text>
          <CardItem style={styles.imageCardContent}>
            <Body>
              <Text>
                <Image source={require('../../images/rose-human1pack.jpeg')} style={styles.image} />
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
    );
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
  // image: {
  //   height: 140,
  //   width: 140,
  // },
  title: {
    fontSize: 50,
  },
  imageCard: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  packName: {
    fontSize: 25
  },
  imageCardContent: {
    // borderColor: 'black',
    // borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
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
    height: 275,
    width: 275,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 3.5,
    borderRadius: 50
  }
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});



export default createAppContainer(AppNavigator)