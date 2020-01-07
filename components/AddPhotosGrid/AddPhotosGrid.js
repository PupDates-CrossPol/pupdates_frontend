import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from '@expo/vector-icons';

const AddDogPhotosGrid = (props) => {
    const currentPhotos = props.uploadedPhotos

    // const dogPackCards = props.pack.map( (dog, i) => {
    const dogImages = currentPhotos.map( (dogImage, i) =>  {
        return (
            <Row style={styles.row}>
                <Image key={i} source={{uri: dogImage.image_url}} style={styles.userCircle}/>
            </Row>
                )
    });

    const createButtons = (num) => {
        const addImageButton = (
            <Row style={styles.row}>
                <TouchableOpacity style={styles.addPhoto}>
                    <Ionicons name="ios-add" size={35} color='rgb(21, 112, 125)' />
                </TouchableOpacity>
            </Row>
        )
        const  addImageButtons = [addImageButton, addImageButton, addImageButton, addImageButton, addImageButton, addImageButton]
        addImageButtons.splice(num)
        return addImageButtons
    }

    const createImagesAndButtonsForGrid = () => {
        const currentPhotos = 6 - currentDogImages.length
        let correctDogImages = currentDogImages
        if (currentPhotos > 0) {
            correctDogImages =  [...dogImages, ...createButtons(currentPhotos)] 
        } else {
            correctDogImages = dogImages
        }
        return buildGrid(correctDogImages)
    }

    const buildGrid = (arryOfImagesAndButtons) => {
        return (
            <Grid style={styles.grid}>
                <Col>
                    {arryOfImagesAndButtons[0]}
                    {arryOfImagesAndButtons[3]}
                </Col>
                <Col>
                    {arryOfImagesAndButtons[1]}
                    {arryOfImagesAndButtons[4]}
                </Col>
                <Col>
                    {arryOfImagesAndButtons[2]}
                    {arryOfImagesAndButtons[5]}
                </Col>
            </Grid>
        )
        
    }

    return (
    <View key={i} style={styles.container}>
        {createImagesAndButtonsForGrid()}
    </View>
    )
    // })
    
    // return (
    //     <>
    //     {dogPackCards}
    //     </>
    //     )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginBottom: '5%',
        borderBottomColor: 'rgba(0,0,0,0.2)',
        borderBottomWidth: 1
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
        height: '50%',
        borderRadius: 40,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 2,
        marginBottom: '3%',
    },
    row: {
        justifyContent: "center",
        margin: '8%'
    },
    userCircle: {
        aspectRatio: 1/1,
        width: '90%',
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
    },
    addPhoto: {
        aspectRatio: 1/1,
        width: '90%',
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dogTextName: {
        fontSize: 30,
        marginBottom: '2%',
        marginLeft: '7%'
    },
    infoText: {
        textAlign: 'left',
        fontSize: 20,
        color: 'grey',
        alignSelf: 'stretch',
        marginLeft: '7%'

    },
    infoTextBottom: {
        textAlign: 'left',
        fontSize: 20,
        color: 'grey',
        alignSelf: 'stretch',
        marginBottom: '5%',
        marginLeft: '7%'
    },
  });

  export default AddDogPhotosGrid
