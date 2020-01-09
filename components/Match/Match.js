import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'


const Match = (props) => {
    const dogPackImageCreator = dogs => dogs.map( (dog, i) =>  {
        const dogPlacement = `dogCircle${(i+1)}`
        return <Image key={i} source={{uri: dog}} style={styles[dogPlacement]} />
    } );

    const dogPackImages = (dogIds) => {
        return dogIds.map( id => props.matchesImages.find( photo => photo.dog_id === id))
    }

    const userDogPack = (userId) => {
        const matchDogPack = props.matchesPack.filter( dog => dog.user_id === userId)
        const dogIds = matchDogPack( dog => dog.id)
        return dogPackImages(dogIds)
    }

    const allMatches = props.matches.map( (match, i) => {
        const {userImage, userName, userEmail} = match
        const SelectedDogPackImages = userDogPack(match.id)

        return (
            <View key={i} style={styles.matchViewIndividual}>
                <View style={styles.matchTouchableOpacity} onPress={() => console.log('TAKE ME TO THIS MATCH')} >
                    <Text style={styles.matchUserNameText}>{userName}'s Pack</Text>
                    <Text style={styles.matchUserEmail}>{userEmail}</Text>
                    <View style={styles.matchesImages}>
                        <Image source={{uri: userImage}} style={styles.userCircle} />
                        {dogPackImageCreator(SelectedDogPackImages )}
                    </View>
                <View style={styles.bottomLine}></View>
                </View>
             </View>
        );
    });

    return (
       allMatches
    );
};

const styles = StyleSheet.create({
    matchViewIndividual: {
        flexDirection: 'column',
        width: '75%',
    },
    matchTouchableOpacity: {
        padding: 0,
        margin: 0,
        paddingTop: 10,
        marginLeft: '2%',
    },
    matchesImages: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    userCircle: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
    },
    dogCircle1: {
        aspectRatio: 1/1,
        height: '68%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '15%',
    },
    dogCircle2: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '30%',
    },
    dogCircle3: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '45%',
    },
    dogCircle4: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '60%',
    },
    dogCircle5: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '75%',
    },
    dogCircle6: {
        aspectRatio: 1/1,
        height: '65%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '90%',
    },
    matchUserNameText: {
        fontSize: 25,
        fontWeight: '300',
    },
    matchUserEmail: {
        fontSize: 20,
        fontWeight: '200',
        marginLeft: 10
    },
    bottomLine: {
        borderBottomColor: 'rgba(0,0,0,0.57)',
        borderBottomWidth: 1,
        width: '100%'
    }
})

export const mapStateToProps = state => ({
    matches: state.matches,
    matchesImages: state.matchesImages,
    matchesPack: state.matchesPack
  })
  
  export default connect (mapStateToProps)(Match)
