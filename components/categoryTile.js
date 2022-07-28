import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CategoryTile({name, onPress}) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#006d77',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#FFFFFF',
  }
});
