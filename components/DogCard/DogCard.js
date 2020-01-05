import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux'
import { setPackInfo, setPackPhotos } from '../../actions'

const DogCard = (props) => {
    const dogPackCards = props.pack.map( (dog, i) => {
        
        const dogImages = props.packPhotos.map( (dogImage, i) =>  {
            return <Image key={i} source={{uri: dogImage.image_url}} style={styles.userCircle}/>
        });
        
        return (
        <View key={i} style={styles.container}>
            <Text>Name: {dog.name}</Text>
            <Grid style={styles.grid}>
                <Col>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                    <Row>
                        <Image key={i} source={{uri: 'https://images.pexels.com/photos/752383/pexels-photo-752383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.userCircle}/>
                    </Row>
                </Col>
            </Grid>
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
    container: {
        flex: 1,
      },
    menuCircle: {
      aspectRatio: 1/1,
      height: 300,
      width: 300,
      borderRadius: 100,
      borderColor: 'black',
      borderWidth: 2,
    },
    grid: {
        width: '90%',
    },
    userCircle: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
    }
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