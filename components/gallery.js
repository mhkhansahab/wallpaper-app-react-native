import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList,ActivityIndicator, TouchableOpacity } from 'react-native';
import ImageTile from './imageTile';

export default function Gallery({navigation, route}) {
  const [data,setData] = useState(null);

  const sample = [
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
    {url: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg'},
  ];

  console.log('route.params==>',route.params)
  const {item} = route.params;

  const getAllPhotos = async ()=>{
    const options = {
      method: 'GET',
      headers: { 
        Authorization: 'Client-ID mEBQZJx-axAebgvqMEsht_PkdXbOt4gI0A0goP7ffJQ',
        'Accept-Version': 'v1'
       }
    };
    if(item?.id){

        const response = await fetch(`https://api.unsplash.com/topics/${item.id}/photos`, options);
        const data = await response.json();
    console.log(data?.length)
    console.log(data)
    setData(data);
}
  }


  useEffect(() => { 
    getAllPhotos();
  },[]);
  
  const renderItem = ({ item }) => (
    <ImageTile url={item?.urls?.full}/>
  );

  const goBack = () => (
    navigation.goBack()
  );

    return (
        <View style={styles.container}>
        <View style={styles.title}>
        <TouchableOpacity onPress={goBack}>
            <Image source={require('./../assets/back.png')} style={styles.backIcon}/>
        </TouchableOpacity>
          <Text style={styles.text}>{item?.title}</Text>
        </View>
       <View  style={styles.listContainer}>
        {
          data ? 
          <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListStyle}
        />
          :  
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#006d77" />
          </View>
        }
       </View>
      </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
     
    },
    listContainer:{
      flexDirection: 'row',
      paddingTop: 20,
      paddingBottom: 40,
      alignItems: 'stretch',
      flex:1
    },
    flatListStyle:{
      flexDirection: 'column',
      paddingTop: 80,
      alignItems: 'center',  
    },
    title:{
      position: 'absolute',
      flexDirection: 'row',
      width: '100%',
      zIndex: 100,
      paddingTop: 40,
      paddingLeft: 20,
      paddingBottom: 10,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(256, 256, 256, 0.6)',
    },
    text:{
      fontSize: 30,
      color: '#006d77'
    },
    loader:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backIcon:{
        width:32,
        height: 32,
        marginRight: 10,
    }
  });