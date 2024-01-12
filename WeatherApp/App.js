import React,  { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./src/components/Tabs"
import Counter from "./src/demonstration/Counter"
import ErrorItem from './src/screens/ErrorItem'
import { useGetWeather } from './src/hooks/useGetWeather'


const App = () => {
  
  const [loading, error, weather] = useGetWeather()
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}></Tabs>
      </NavigationContainer>
    )
  }
  return ( 
    <View style={styles.container}>
      {error ?  <ErrorItem></ErrorItem> : <ActivityIndicator size={'large'} color={'blue'}></ActivityIndicator>}
    </View>
    
  )
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  }
})

export default App