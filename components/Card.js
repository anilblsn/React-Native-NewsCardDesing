import React from 'react';
import { Text,Image,SafeAreaView,View ,StyleSheet,Dimensions} from 'react-native';


function Card({haberler}){
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image style={styles.images} source={{uri: haberler.image}} />
                <Text style={styles.title}>{haberler.title}</Text>
                <Text style={styles.description}>{haberler.description}</Text>
                <View style={styles.innerBottom}>
                    <Text style={styles.author}>{haberler.author}</Text>
                    <Text style={styles.date}>{haberler.published_at}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:5,
        flex:1,
    },
    images:{
        height:Dimensions.get('window').height/4,
        borderRadius:10,
        
    },
    title:{
        fontWeight:'bold',
        fontSize:22,
        marginBottom:5,
        color:'black',
    },
    innerBottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
    },
    author:{
        color:'black',
        fontSize:15,
    },
    date:{
        fontSize:15,
        fontStyle:'italic',
    },
})

export default Card;