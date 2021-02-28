import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants'

export default function Header() {
  return (
    <View style={{
      height: 30,
      backgroundColor: "white",
      marginTop:Constant.statusBarHeight,
    }}>
      <View style={{
        flexDirection: "row",
        margin: 3,
      }}>
        <Text style={{
          fontSize: 18,
          margin: 3,
        }}>Youtubaby app</Text>
      </View>

      <View></View>
    </View>
  );
}