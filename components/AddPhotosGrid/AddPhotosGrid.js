import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Modal} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from '@expo/vector-icons';
import ImageUpload from '../ImageUpload/ImageUpload'

class AddDogPhotosGrid extends React.Component {
    state = {
        modalVisible: false,
        uploadedPhotos: this.props.uploadedPhotos,
      };


    dogImages = this.state.uploadedPhotos.map( (dogImage, i) =>  {
        
        return (
            <Row key={i} style={styles.row}>
                <Image source={{uri: dogImage.image_url}} style={styles.userCircle}/>
            </Row>
                )
    });

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

    createButtons = (num) => {
        const addImageButton = (
            <Row style={styles.row}>
                <TouchableOpacity style={styles.addPhoto} onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);}} >
                    <Ionicons name="ios-add" size={35} color='rgb(21, 112, 125)' />
                </TouchableOpacity>
            </Row>
        )
        const  addImageButtons = [addImageButton, addImageButton, addImageButton, addImageButton, addImageButton, addImageButton]
        addImageButtons.splice(num)
        return addImageButtons
    }

    createImagesAndButtonsForGrid = () => {
        const amountOfCurrentPhotos = 6 - this.state.uploadedPhotos.length
        let correctDogImages = this.state.uploadedPhotos
        if (amountOfCurrentPhotos > 0) {
            correctDogImages =  [...this.dogImages, ...this.createButtons(amountOfCurrentPhotos)] 
        } else {
            correctDogImages = this.dogImages
        }
        return this.buildGrid(correctDogImages)
    }

    buildGrid = (arryOfImagesAndButtons) => {
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
    render() {
        return (
            <View style={styles.container}>
                 <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!this.state.modalVisible);
                    }}>
                <ImageUpload modalStatus={this.state.modalVisible} />
              </Modal>
                {this.createImagesAndButtonsForGrid()}
            </View>
            )
    }
   

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginBottom: '5%',
        marginTop: 15,
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
        alignSelf: 'center'
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
