import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Picker } from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as apiCalls from '../../apiCalls';
import * as Font from 'expo-font';
import AddDogPhotosGrid from '../AddPhotosGrid/AddPhotosGrid'
import KeyboardShift from '../KeyboardShift/KeyboardShift'


class AddDogScreen extends React.Component {
    state = {
        name: null,
        sex: null,
        breed: null,
        size: null,
        age: null,
        fixed: null,
        vaccinated: null,
        good_with_kids: null,
        uploadedPhotos: []
      }

      static navigationOptions = ({navigation}) => ({        
        headerLeft: () =>  (
            <TouchableOpacity style={styles.backArrow} onPress={() => navigation.navigate('DogPack')}>
                <Ionicons name="ios-close" size={50} color='rgb(21, 112, 125)' />
            </TouchableOpacity>
        ),
        headerTitle: () => <Image source={require('../../assets/AddDogSpread.png')} style={styles.navTitle}/>,
        headerRight: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
        headerLeftContainerStyle: styles.leftNavIcon,
        headerRightContainerStyle: styles.rightNavIcon,
      })

      resetState = () => {
        this.setState({
          name: null,
          sex: null,
          breed: null,
          size: null,
          age: null,
          fixed: null,
          vaccinated: null,
          good_with_kids: null,
          uploadedPhotos: []
        })
      };

      canBeSubmitted() {
        const { name, sex, breed, size, age, fixed, vaccinated, good_with_kids  } = this.state
        return (!name === null && !sex === null && !breed === null && !size === null && !age === null && !fixed === null && !vaccinated === null && !good_with_kids === null)
      };

      handleChange = stateLocation => {
        this.setState({ stateLocation });
      };

      handleStart = () => {
        const { ramdomizeGameData, gameData } = this.props
        ramdomizeGameData(gameData)
      };

      handleSubmit = async () => {
        console.log('SUBMITING!!!!!');
        const { name, sex, breed, size, age, fixed, vaccinated, good_with_kids  } = this.state
        const newDogRequest = await apiCalls.addDogForUser( user_id= this.props.user.id, name, sex, breed, size, age, fixed, vaccinated, good_with_kids)
        // resetState()
      };

    render() {
      const isEnabled = this.canBeSubmitted()
        return (
          <KeyboardShift>
          {() => (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.addDogCard}>
                        <AddDogPhotosGrid uploadedPhotos={this.state.uploadedPhotos}/>
                        <TextInput placeholder='Name' style={styles.input} onChangeText={ name => this.handleChange(name)} value={this.state.name}/>
                        <TextInput placeholder='Sex' style={styles.input} onChangeText={ sex => this.handleChange(sex)} value={this.state.sex}/>
                        <TextInput placeholder='Breed' style={styles.input} onChangeText={ breed => this.handleChange(breed)} value={this.state.breed}/>
                        <TextInput placeholder='Size' style={styles.input} onChangeText={ size => this.handleChange(size)} value={this.state.size}/>
                        <TextInput placeholder='Age' style={styles.input} onChangeText={ age => this.handleChange(age)} value={this.state.age}/>
                        <TextInput placeholder='Fixed' style={styles.input} onChangeText={ fixed => this.handleChange(fixed)} value={this.state.fixed}/>
                        <TextInput placeholder='Vaccinated' style={styles.input} onChangeText={ vaccinated => this.handleChange(vaccinated)} value={this.state.vaccinated}/>
                        <TextInput placeholder='Good With Kids?' style={styles.input} onChangeText={ good_with_kids => this.handleChange(good_with_kids)} value={this.state.goodWithKids}/>
                        <TouchableOpacity 
                          // disabled={!isEnabled} 
                          style={styles.button} 
                          onPress={() => this.handleSubmit()}>
                            <LinearGradient
                                colors={['orange', '#c32525']}
                                style={styles.linearGradient}
                                >
                                <Text style={styles.buttonText}>Save Pup</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
      </SafeAreaView>
    )}
    </KeyboardShift>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addDogCard: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        height: 40,
        width: 40,
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
    leftNavIcon: { 
        marginLeft: 10,  
        marginBottom: 5, 
    },
    backArrow: {
      marginLeft: 5,
    },
    componentTitle: {
        color: 'rgba(0,0,0,0.57)',
        fontSize: 30,
        fontWeight: '300',
      },
      input: {
        height: 30,
        width: '90%',
        borderColor: 'rgba(0,0,0,0.2)',
        borderRadius: 50,
        borderWidth: 1.5,
        padding: 10,
        marginBottom: 15,
        height: 40,
        // margin: 20,
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
          width: '70%',
        // borderRadius: 50,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        marginTop: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 25,
      },
     
})


export const mapStateToProps = state => ({
    user: state.user,
    pack: state.pack,
    packPhotos: state.packPhotos
  })
  
  export const mapDispatchToProps = dispatch => ({
    setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
    setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(AddDogScreen)