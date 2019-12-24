import * as React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Match = ({matches}) => {
    const dogPackImages = dogs => dogs.map( (dog, i) =>  {
    const dogPlacement = `dogCircle${(i+1)}`
    return <Image key={i} source={{uri: dog}} style={styles[dogPlacement]} />} );

    const allMatches = matches.map( (match, i) => {
        const {userImage, pack, userName} = match
        return (
            <View key={i} style={styles.matchViewIndividual}>
                <TouchableOpacity style={styles.matchTouchableOpacity} onPress={() => console.log('TAKE ME TO THIS MATCH')} >
                    <View style={styles.matchesImages}>
                        <Image source={{uri: userImage}} style={styles.userCircle} />
                        {dogPackImages(pack)}
                    </View>
                    <Text style={styles.matchUserNameText}>{userName}'s Pack</Text>
                </TouchableOpacity>
             </View>
        );
    });

    return (
       allMatches
    );
};

const styles = StyleSheet.create({
    matchViewIndividual: {
        borderBottomColor: 'rgba(0,0,0,0.57)',
        borderBottomWidth: 1,
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
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
    },
    dogCircle1: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '15%',
    },
    dogCircle2: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '30%',
    },
    dogCircle3: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '45%',
    },
    dogCircle4: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '60%',
    },
    dogCircle5: {
        aspectRatio: 1/1,
        height: '75%',
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        position: 'absolute',
        left: '75%',
    },
    dogCircle6: {
        aspectRatio: 1/1,
        height: '75%',
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
})

export default Match