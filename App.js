import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList,ActivityIndicator } from 'react-native';
import CategoryTile from './components/categoryTile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import Gallery from './components/gallery';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen 
      name="Home" 
      component={Home} 
      />
      <Stack.Screen 
      name="Gallery" 
      component={Gallery} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

