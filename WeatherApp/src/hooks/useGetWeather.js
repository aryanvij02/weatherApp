//Creating a customer hook here
//In a customer hook, when I use this hook elsewhere
//If the properties that are defined here that should triger useEffect change
//It will trigger useEffect in this hook and hence have an impact wherever this custom hook is used

import React,  { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
    const [loading, setLoading] = useState(true)
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
  
    const fetchWeatherData = async () => {
      try {
        const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        const data = await res.json()
        setWeather(data)
      } catch (e) {
        setError('Could not fetch weather data')
      } finally {
        setLoading(false)
      }
    }
  
    useEffect(() => {
      (async() => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setError('permission to access location not granted')
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLat(location.coords.latitude)
        setLon(location.coords.longitude)
        await fetchWeatherData()
      })() //These set of paranthesis immediately call this async function that is just written 
    }, [lat, lon])

    return ([loading, error, weather])
}