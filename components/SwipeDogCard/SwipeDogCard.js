import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { SliderBox } from "react-native-image-slider-box";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';



export const SwipeDogCard = (props) => {
  // console.log('in swipe card', props.swipePack)
  console.log('next line', props.swipePackPhotos)
  const dogCards = props.swipePack.map((dog, index) => {
    // console.log('am i here')
    const currentImages = props.swipePackPhotos.filter(pic => pic.dog_id === dog.id)
    const boxPics = currentImages.map(image => image.image_url)
    console.log('box pics', boxPics)
    return (
      <Card style={styles.imageCard}>
        <Text style={styles.packName}>{props.swipeUser.attributes.first_name}'s Pack</Text>
          <CardItem style={styles.imageCardContent}>
            <Body>
            <SliderBox images={boxPics} style={styles.image} dotColor='rgb(21, 112, 125)' circleLoop />
            </Body>
          </CardItem>
          <CardItem style={styles.imageCardContentText}>
            <Body style={styles.infoBody}>
              <Text style={styles.infoTextName}>Name: {dog.name}</Text>
              <Text style={styles.infoText}>Breed: {dog.breed}</Text>
              <Text style={styles.infoText}>Age: {dog.age}</Text>
              <Text style={styles.infoText}>Gender: {dog.sex}</Text>
              <Text style={styles.infoText}>Fixed: {dog.fixed ? 'true' : 'false'}</Text>
              <Text style={styles.infoText}>Vaccinated: {dog.vaccinated ? 'true' : 'false'}</Text>
              <Text style={styles.infoText}>Good with kids: {dog.good_with_kids ? 'true' : 'false'}</Text>
            </Body>
          </CardItem>
            <View style={styles.pawBtn}>
              <TouchableOpacity onPress={() => console.log('DISLIKE')}>
                <Ionicons name="ios-thumbs-down" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log('LIKE')}>
                <Ionicons name="md-paw" size={40} color="black"/>
              </TouchableOpacity>
            </View>
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
  
    imageCardContentText: {
      alignItems: 'center',
      justifyContent: 'center',
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
      height: 325,
      width: 275,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 3.5,
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
      fontSize: 30
    },
    infoBody: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      height: 50
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







// const DogCard = (props) => {

//     const dogPackCards = props.pack.map( (dog, i) => {
//         const currentDogImages = props.packPhotos.filter( photo => photo.dog_id === dog.id);

//         const dogImages = currentDogImages.map( (dogImage, i) =>  {
//             return (
//                 <Row style={styles.row}>
//                     <Image key={i} source={{uri: dogImage.image_url}} style={styles.userCircle}/>
//                 </Row>
//                     )
//         });

//         const createButtons = (num) => {
//             const addImageButton = (
//                 <Row style={styles.row}>
//                     <TouchableOpacity style={styles.addPhoto}>
//                         <Ionicons name="ios-add" size={35} color='rgb(21, 112, 125)' />
//                     </TouchableOpacity>
//                 </Row>
//             )
//             const  addImageButtons = [addImageButton, addImageButton, addImageButton, addImageButton, addImageButton, addImageButton]
//             addImageButtons.splice(num)
//             return addImageButtons
//         }

//         const createImagesAndButtonsForGrid = () => {
//             const dogImagesCount = 6 - currentDogImages.length
//             let correctDogImages = currentDogImages
//             if (dogImagesCount > 0) {
//                 correctDogImages =  [...dogImages, ...createButtons(dogImagesCount)] 
//             } else {
//                 correctDogImages = dogImages
//             }
//             return buildGrid(correctDogImages)
//         }

//         const buildGrid = (arryOfImagesAndButtons) => {
//             return (
//                 <Grid style={styles.grid}>
//                     <Col>
//                         {arryOfImagesAndButtons[0]}
//                         {arryOfImagesAndButtons[3]}
//                     </Col>
//                     <Col>
//                         {arryOfImagesAndButtons[1]}
//                         {arryOfImagesAndButtons[4]}
//                     </Col>
//                     <Col>
//                         {arryOfImagesAndButtons[2]}
//                         {arryOfImagesAndButtons[5]}
//                     </Col>
//                 </Grid>
//             )

//         }

//         return (
//         <View key={i} style={styles.container}>
//             <Text style={styles.dogTextName}>{dog.name}</Text>
//             {createImagesAndButtonsForGrid()}
//             <View style={styles.imageContainer}>
//             </View>
//             <Text style={styles.infoText}>Sex: {dog.sex}</Text>
//             <Text style={styles.infoText}>Breed: {dog.breed}</Text>
//             <Text style={styles.infoText}>Size: {dog.size}</Text>
//             <Text style={styles.infoText}>Age:  {dog.age}</Text>
//             <Text style={styles.infoText}>Fixed: {dog.fixed ? 'true' : 'false'}</Text>
//             <Text style={styles.infoText}>Vaccinated: {dog.vaccinated ? 'true' : 'false'}</Text>
//             <Text style={styles.infoTextBottom}>Good With Kids: {dog.good_with_kids ? 'true' : 'false'}</Text>
//         </View>
//         )
//     })

//     return (
//         <View>
//        {dogPackCards}
//         </View>
//         )

// }
