import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image,ActivityIndicator } from 'react-native';

export default function ImageTile({url}) {
  const [loading, setLoading] = useState(true);
  
    return (
    <TouchableOpacity activeOpacity={0.9}>
    <View style={styles.container}>
      <Image 
      style={styles.image}
      source={{
          uri: url,
        }}
        onLoadEnd={()=>setLoading(false)}
        />
        {loading && <ActivityIndicator size="small" color="#ffffff" style={{position: 'absolute'}}/>}
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#006d7799',
    margin: 8,
    flex: 1,
    flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
  },
  text:{
    color: '#FFFFFF',
  },
  image:{
    width: 160,
    height: 220,
    borderRadius: 10,
  }
});
