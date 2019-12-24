import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Match = () => {
    return (
        <View>
            <View>
                <TouchableOpacity>
                    {/* icon goes here */}
                <Text style={styles.componentTitle} >Menu</Text>
                </TouchableOpacity>
                <Text style={styles.componentTitle} >Matches</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '2%',
      marginBottom: '2%'
    },
});

export default Match