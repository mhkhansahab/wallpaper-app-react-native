import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList,ActivityIndicator } from 'react-native';
import CategoryTile from './categoryTile';

export default function Home({navigation}) {

  const [data, setData] = useState(null);

const getAllCategories = async ()=>{
  const options = {
    method: 'GET',
    headers: { 
      Authorization: 'Client-ID mEBQZJx-axAebgvqMEsht_PkdXbOt4gI0A0goP7ffJQ',
      'Accept-Version': 'v1'
     }
  };
  const response = await fetch('https://api.unsplash.com/topics?per_page=30', options);
  const data = await response.json();
  console.log(data?.length)
  data?.map(category =>{
    console.log('--------------------------------') 
    console.log(category?.title);
    console.log('--------------------------------') 
  })
  setData(data);
}

const openGallery = (item) => { 
    navigation.navigate('Gallery', { item: item });
 }


useEffect(() => { 
  getAllCategories();
},[]);

const renderItem = ({ item }) => (
  <CategoryTile name={item?.title} onPress={()=>openGallery(item)}/>
);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Categories</Text>
      </View>
     <View  style={styles.listContainer}>
      {
        data ? 
        <FlatList
        numColumns={2}
        data={data}
        // keyExtractor={(item, index) => `${index}`}
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
  );
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
    width: '100%',
    zIndex: 100,
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 10,
    justifyContent: 'center',
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
  }
});
