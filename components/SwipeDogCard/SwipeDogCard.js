import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { SliderBox } from "react-native-image-slider-box";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



export const SwipeDogCard = (props) => {
  const dogCards = props.swipePack.map((dog, index) => {
   
    const currentImages = props.swipePackPhotos.filter(pic => pic.dog_id === dog.attributes.id)
    
    const boxPics = currentImages.map(image => image.image_url)
    return (
      <Card key={index} style={styles.imageCard}>
        {/* <Text style={styles.packName}>{props.swipeUser.attributes.first_name}'s Pack</Text> */}
          <CardItem style={styles.imageCardContent}>
            <Body>
            <SliderBox images={boxPics} style={styles.image} dotColor='rgb(21, 112, 125)' circleLoop disableOnPress/>
            </Body>
          </CardItem>
          <CardItem style={styles.imageCardContentText}>
            <Body style={styles.infoBody}>
              <Text style={styles.infoTextName}>{dog.attributes.name}</Text>
              <Text style={styles.infoText}>Breed: {dog.attributes.breed}</Text>
              <Text style={styles.infoText}>Age: {dog.attributes.age}</Text>
              <Text style={styles.infoText}>Gender: {dog.attributes.sex}</Text>
              <View style={styles.checkMark} >
              <Text style={styles.infoText}>Fixed: </Text>{dog.attributes.fixed ? <Ionicons name="ios-checkmark" size={30} color='rgb(21, 112, 125)' />
                : <Ionicons name="ios-close" size={30} color='rgb(239,62,103)' />}
              </View>
              <View style={styles.checkMark} >
                <Text style={styles.infoText}>Vaccinated: </Text>{dog.attributes.vaccinated ? <Ionicons name="ios-checkmark" iconStyle={styles.iconStyle}  size={30} color='rgb(21, 112, 125)' />
                : <Ionicons name="ios-close" iconStyle={styles.iconStyle} size={30} color='rgb(239,62,103)' />}
              </View>
              <View style={styles.checkMark} >
                <Text style={styles.infoText}>Good with kids: </Text>{dog.attributes.good_with_kids ? <Ionicons name="ios-checkmark" size={30} color='rgb(21, 112, 125)' />
                : <Ionicons name="ios-close" size={30} color='rgb(239,62,103)' />}
              </View>
            </Body>
          </CardItem>
        </Card> 
    )
   
    
  })
  return (
      <>
        {dogCards}
      </>
  )}



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      // marginTop: 90
    },
    logo: {
      height: 40,
      width: 40,
    },
    title: {
      fontSize: 50,
    },
    imageCard: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    infoCard: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      width: '80%'
    },
    packName: {
      fontSize: 25
    },
    imageCardContent: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: 350,
    },
    yesNoIcon: {
      alignSelf: 'baseline',
      alignSelf: 'center'

    },
    imageCardContentText: {
      alignItems: 'center',
      // justifyContent: 'center',
      flexDirection: 'column',
      height: 250,
      width: '80%'
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
      height: '100%',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth: 1.5,
      borderRadius: 50,
      alignSelf: 'center'
    },
    infoText: {
      textAlign: 'left',
      fontSize: 20,
      color: 'grey',
      alignSelf: 'stretch'
    },
    infoTextName: {
      fontSize: 30,
      textAlign: 'left',
      marginBottom: 5
    },
    checkMark: {
      height: 34,
      justifyContent: 'center',
      alignItems:"center",
      alignContent: 'center',
      flexDirection: 'row'
    },
    iconStyle: {
      height: 23,
      margin: 0,
      padding: 0
    },
    infoBody: {
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
    },
    roundBtn: {
      width: 40
    },
    pawBtn: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '90%',
    }
  });
  


export const mapStateToProps = (state) => ({
  swipePack: state.swipePack,
  swipePackPhotos: state.swipePackPhotos
})

export default connect (mapStateToProps)(SwipeDogCard)






