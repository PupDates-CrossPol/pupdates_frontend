import * as React from 'react';
import { StyleSheet,  View, TextInput, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
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
      <ScrollView>
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
        <Card style={styles.infoCard}>
          <CardItem style={styles.infoCard}>
            <Body style={styles.infoBody}>
              <Text style={styles.infoText}>Rose</Text>
              <Text style={styles.infoText}>Golden Retriever</Text>
              <Text style={styles.infoText}>3 Years Old</Text>
              <Text style={styles.infoText}>Female</Text>
              <Text style={styles.infoText}>Spayed? Yes</Text>
              <Text style={styles.infoText}>Vaccinated? Yes</Text>
              <Text style={styles.infoText}>Good with kids? Yes</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
    </ScrollView>

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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 2,
    height: 350,
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
    borderRadius: 50
  },
  infoCard: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    borderColor: 'red',
    borderWidth: 2,
    // width: 275,
  },
  infoText: {
    textAlign: 'left',
    fontSize: 20,
  },
  infoBody: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});



export default createAppContainer(AppNavigator)