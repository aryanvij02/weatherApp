import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {
    console.log("Weather" + weather)
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tapBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'black',
            },
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTitleStyle: {
                fontStyle: 'italic',
                fontSize: 30,
                color: 'tomato',
            }
        }}
        >
            <Tab.Screen name={'Current'} options={{
            tabBarIcon: ({ focused }) => (<Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'white'}/>)
            }}>
                {/* This is how to pass props to components for Tab.Screen */}
                {() => <CurrentWeather weatherData={weather.list[0]}></CurrentWeather>}
            </Tab.Screen>
            <Tab.Screen name={'Upcoming'} options={{
            tabBarIcon: ({ focused }) => (<Feather name={'clock'} size={25} color={focused ? 'tomato' : 'white'}/>)
            }}>
                {() => <UpcomingWeather weatherData={weather.list}></UpcomingWeather>}
            </Tab.Screen>
            <Tab.Screen name={'City'} options={{
            tabBarIcon: ({ focused }) => (<Feather name={'home'} size={25} color={focused ? 'tomato' : 'white'}/>)
            }}>
                {() => <City weatherData={weather.city}></City>}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default Tabs