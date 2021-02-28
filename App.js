import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constant from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { reducer } from './src/reducers/reducer'

import Home from './src/screens/Home';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer)
const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = () => {
  return (
    // You can open this for add new tab on page bottom
    /*
      <Tabs.Navigator style={{ height: 0 }}>
        <Tabs.Screen name="-" component={Home} />
        <Tabs.Screen name="explore" component={Explore} /> 
      </Tabs.Navigator>
    */
    <Home />
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="rootHome" component={RootHome} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}