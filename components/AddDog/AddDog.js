import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'
import { Ionicons } from '@expo/vector-icons';

class AddDog extends React.Component {
    state = {
        name: '',
        sex: '',
        size: '',
        age: '',
        fixed: false,
        vaccinated: false,
        goodWithKids: false
      }

    render() {
        return (
            <></>
        )
    }
}


export const mapStateToProps = state => ({
    pack: state.pack,
    packPhotos: state.packPhotos
  })
  
  export const mapDispatchToProps = dispatch => ({
    setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
    setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(DogCard)