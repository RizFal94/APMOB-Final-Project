import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import File from './src/screens/File';
import Rekam from './src/screens/Rekam';
import Settings from './src/screens/Settings';
import About from './src/screens/About';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="File" component={File} />
        <Stack.Screen name="Rekam" component={Rekam} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
