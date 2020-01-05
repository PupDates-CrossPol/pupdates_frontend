import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'

const DogCard = (props) => {
    console.log('props', props.pack);
    
    return (
        <View> 
            <Text>THIS IS WHERE THE DOGS GO!!</Text>
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