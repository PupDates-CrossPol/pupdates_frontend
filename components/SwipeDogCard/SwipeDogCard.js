import * as React from 'react'
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'
import { SliderBox } from "react-native-image-slider-box";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from 'native-base';



export const SwipeDogCard = (props) => {
  console.log('in swipe card', props.swipePack)
  console.log('next line', props.swipePackPhotos)
  const dogCards = props.swipePack.map((dog, index) => {
    console.log('am i here')
    const currentImages = props.swipePackPhotos.filter(pic => pic.dog_id === dog.id)
    const boxPics = currentImages.map(image => image.image_url)
    console.log('box pics', boxPics)
    return boxPics
    
  })
  return (
      <View>
      <Content>
        <Card>{dogCards}</Card>
      </Content>
      </View>
  )}



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
