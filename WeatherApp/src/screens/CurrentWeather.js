import React from "react"
import {View, Text, SafeAreaView, StyleSheet} from "react-native"
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({weatherData}) => {
  const { container, highlowwrapper, highlow, feel, tempData, description, message, bodyWrapper } = styles
  const { main: {
    temp,
    feels_like,
    temp_max, 
    temp_min,
  }, weather} = weatherData

  const weatherCondition = weather[0].main

  return (
  <SafeAreaView style={[styles.wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
    <View style = {container}>
      <Feather name={ weatherType[weatherCondition].icon } size={100} color="white" />
      <Text style = {tempData}>{`${temp}°`}</Text>
      <Text style={feel}>{`Feels Like ${feels_like}°`}</Text>
      <RowText wrapperStyle={highlowwrapper} styleOne={highlow} styleTwo={highlow} textOne={`High: ${temp_max}°  `} textTwo={`Low: ${temp_min}°`}></RowText>
    </View>
    <RowText wrapperStyle={bodyWrapper} styleOne={description} styleTwo={message} textOne={weather[0].description} textTwo={weatherType[weatherCondition].message}></RowText>
  </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempData: {
    color: 'black',
    fontSize: 48
  },
  feel: {
    color: 'black',
    fontSize: 30
  },
  highlow: {
    color: 'black',
    fontSize: 20
  },
  highlowwrapper: {
    flexDirection: "row"
  }, 
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 30,
  },
  message: {
    fontSize: 20
  }
})

export default CurrentWeather