import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'
import { Ionicons } from '@expo/vector-icons';
import { AddDogPhotosGrid } from '../AddPhotosGrid/AddPhotosGrid'

class AddDogScreen extends React.Component {
    state = {
        name: '',
        sex: '',
        size: '',
        age: '',
        fixed: false,
        vaccinated: false,
        goodWithKids: false,
        uploadedPhotos: []
      }

      static navigationOptions = ({navigation}) => ({        
        headerLeft: () =>  (
            <TouchableOpacity onPress={() => navigation.navigate('DogPack')}>
                <Ionicons name="ios-close" size={50} color='rgb(21, 112, 125)' />
            </TouchableOpacity>
        ),
        headerTitle: () => <Text style={styles.componentTitle} >Add A Pup</Text>,
        headerRight: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
        // headerStyle: {
        //   backgroundColor: '#fff',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //   fontWeight: 'bold',
        // },
        headerLeftContainerStyle: styles.leftNavIcon,
        headerRightContainerStyle: styles.rightNavIcon,
      })

      updateEmail(email) {
        this.setState({ email })
      }

    render() {
        return (
            <SafeAreaView style={styles.contentContainer}>
                <AddDogPhotosGrid uploadedPhotos={this.state.uploadedPhotos}/>
                <TextInput placeholder='name' style={styles.input} onChangeText={name => this.updateEmail(name)} value={this.state.name}/>
                <TextInput placeholder='sex' style={styles.input} onChangeText={sex => this.updateEmail(sex)} value={this.state.sex}/>
                <TextInput placeholder='size' style={styles.input} onChangeText={size => this.updateEmail(size)} value={this.state.size}/>
                <TextInput placeholder='age' style={styles.input} onChangeText={age => this.updateEmail(age)} value={this.state.age}/>
                <TextInput placeholder='fixed' style={styles.input} onChangeText={fixed => this.updateEmail(fixed)} value={this.state.fixed}/>
                <TextInput placeholder='vaccinated' style={styles.input} onChangeText={vaccinated => this.updateEmail(vaccinated)} value={this.state.vaccinated}/>
                <TextInput placeholder='goodWithKids' style={styles.input} onChangeText={goodWithKids => this.updateEmail(goodWithKids)} value={this.state.goodWithKids}/>
                <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                <LinearGradient
                colors={['orange', '#c32525']}
                style={styles.linearGradient}
                onPress={() => console.log('does this work?')} >
                    <Text style={styles.buttonText}>Login</Text>
                </LinearGradient>
                </TouchableOpacity>
      </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    componentTitle: {
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
      }
})


export const mapStateToProps = state => ({
    pack: state.pack,
    packPhotos: state.packPhotos
  })
  
  export const mapDispatchToProps = dispatch => ({
    setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
    setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(AddDogScreen)