import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'

const DogCard = (props) => {
    const dogPackCards = props.pack.map( (dog, i) => {
        console.log('dog-line 9', dog);
        
        return (
        <View key={i}>
            <Text>Name: {dog.name}</Text>
            <Text>Sex: {dog.sex}</Text>
            <Text>Breed: {dog.breed}</Text>
            <Text>Size: {dog.size}</Text>
            <Text>Age:  {dog.age}</Text>
            <Text>Fixed: {dog.fixed ? 'true' : 'false'}</Text>
            <Text>Vaccinated: {dog.vaccinated ? 'true' : 'false'}</Text>
            <Text>Good With Kids: {dog.good_with_kids ? 'true' : 'false'}</Text>
        </View>
        )

    })
    
    return (
        <View><Text>THIS IS WHERE THE DOGS GO!!</Text>
       {dogPackCards}
        </View>
        )

}

export const mapStateToProps = state => ({
    user: state.user,
    pack: state.pack,
    packPhotos: state.packPhotos
  })
  
  export const mapDispatchToProps = dispatch => ({
    setPackInfo: (dogPack) => dispatch(setPackInfo(dogPack)),
    setPackPhotos: (dopPackPictures) => dispatch(setPackPhotos(dopPackPictures))
  })
  
  export default connect (mapStateToProps, mapDispatchToProps)(DogCard)