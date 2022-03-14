import React , {useState}from 'react';
import { Text,View,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import news from './news.json';
import Card from '../components/Card';
import Banner from '../components/Banner';



function App(){

 
  const renderNews =({item}) => <Card haberler={item}/>

  return(
    <SafeAreaView style={styles.container}>
      <Banner/>
      <FlatList 
      data={news}
      renderItem={renderNews}/>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:'#e0e0e0',
  },
})


export default App;