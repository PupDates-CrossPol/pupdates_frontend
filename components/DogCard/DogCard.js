import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'

const DogCard = (props) => {
    const dogPackCards = props.pack.map( (dog, i) => {
        
        const dogImages = props.packPhotos.map( (dogImage, i) =>  {
            return <Image key={i} source={{uri: dogImage.image_url}} style={styles.menuCircle}/>
        });
        
        return (
        <View key={i}>
            <Text>Name: {dog.name}</Text>
            <View style={styles.imageContainer}>
            
            </View>
            {dogImages}
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

const styles = StyleSheet.create({
    menuCircle: {
      aspectRatio: 1/1,
      height: 300,
      width: 300,
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 2,
    },
   
  });

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