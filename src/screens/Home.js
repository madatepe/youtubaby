import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card';
import Header from '../components/Header';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const [videos, setLocalVideos] = useState([]);
  const stateData = useSelector(state => {
    return state
  })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setLoading(true);

    Promise.all(stateData.channels.map(async (channelId) => {
      return await fetchVideosByChannelId(channelId);
    }))
    .finally(() => {
      // TODO MA: videos array should mix for random videos
      setLoading(false);
    });
  }

  const fetchVideosByChannelId = async (channelId) => {
    // For try API queries: https://developers.google.com/youtube/v3/docs/?apix=true
    return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&channelId=${channelId}&type=video&key=[YOUR_API_KEY]`)
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data)
        setLocalVideos([...videos, ...data.items]);
      })
  }

  return (
    <View>
      <Header />
        {
          loading
            ? <ActivityIndicator
                size="large"
                color="red"
                style={{ marginTop: 10 }}
              />
            : null
        }

        {
          loading
            ? null
            : <FlatList
                data={videos}
                keyExtractor={item => item.id.videoId}
                renderItem={({item}) => {
                  return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                  />
                }}
              />
        }
    </View>
  );
}

export default HomeScreen