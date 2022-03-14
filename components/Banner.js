import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


function Banner(){
    return(
        <View style={styles.banner}>
            <Text style={styles.text}>ANIL 'S NEWS</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    banner:{
        backgroundColor:'#64b5f6',
        padding:20,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
})

export default Banner;