import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AddDogPhotosGrid from '../AddPhotosGrid/AddPhotosGrid'

class AddDogScreen extends React.Component {
    state = {
        name: null,
        sex: null,
        size: null,
        age: null,
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
        headerTitle: () => <Image source={require('../../assets/AddDogSpread.png')} style={styles.navTitle}/>,
        headerRight: () => <Image source={require('../../assets/PupDatesLogo.png')} style={styles.logo} />,
        headerLeftContainerStyle: styles.leftNavIcon,
        headerRightContainerStyle: styles.rightNavIcon,
      })

      handleChange = stateLocation => {
        this.setState({ stateLocation });
      };


    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.addDogCard}>
                        <AddDogPhotosGrid uploadedPhotos={this.state.uploadedPhotos}/>
                        <TextInput placeholder='name' style={styles.input} onChangeText={ name => this.handleChange(name)} value={this.state.name}/>
                        <TextInput placeholder='sex' style={styles.input} onChangeText={ sex => this.handleChange(sex)} value={this.state.sex}/>
                        <TextInput placeholder='size' style={styles.input} onChangeText={ size => this.handleChange(size)} value={this.state.size}/>
                        <TextInput placeholder='age' style={styles.input} onChangeText={ age => this.handleChange(age)} value={this.state.age}/>
                        <TextInput placeholder='fixed' style={styles.input} onChangeText={ fixed => this.handleChange(fixed)} value={this.state.fixed}/>
                        <TextInput placeholder='vaccinated' style={styles.input} onChangeText={ vaccinated => this.handleChange(vaccinated)} value={this.state.vaccinated}/>
                        <TextInput placeholder='goodWithKids' style={styles.input} onChangeText={ goodWithKids => this.handleChange(goodWithKids)} value={this.state.goodWithKids}/>
                        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
                            <LinearGradient
                                colors={['orange', '#c32525']}
                                style={styles.linearGradient}
                                onPress={() => console.log('does this work?')} >
                                <Text style={styles.buttonText}>Save Pup</Text>
                            </LinearGradient>
                        </TouchableOpacity>
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
    pack: state.pack,
    packPhotos: state.packPhotos
  })
  
  export const mapDispatchToProps = dispatch => ({
    setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
    setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(AddDogScreen)