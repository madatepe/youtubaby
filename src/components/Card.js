import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Card = (props) => {
  const navigation = useNavigation();

  return(
    <TouchableOpacity
      onPress={() => navigation.navigate("videoplayer", {
                videoId: props.videoId,
                title: props.title
              })}
    >
      <View style={{ marginBottom: 10 }}>
        <Image
          source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/default.jpg` }} // or hqdefault.jpg
          style={{
            width: "100%",
            height: 200,
          }}
        />
        <View style={{
          flexDirection: "row",
          margin: 5,
        }}>
          <MaterialIcons name="account-circle" size={40} color="#212121" />
          <View style={{
            marginLeft: 10,
          }}>
            <Text
              ellipsizeMode="middle"
              numberOfLines={1}
              style={{
                fontSize: 20,
                width: "80%",
              }}
            >
              {props.title}
            </Text>

            <Text>
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Card