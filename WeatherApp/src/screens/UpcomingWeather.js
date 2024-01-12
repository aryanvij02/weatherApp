/* eslint-disable no-undef */
import React from 'react'
import {SafeAreaView, StyleSheet, FlatList, View, StatusBar, ImageBackground} from 'react-native'
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';


const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max}></ListItem>
    )
    const {container, image} = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/sunset.jpg')} style={image}>
                <FlatList 
                data={weatherData} 
                renderItem={renderItem}
                keyExtractor={(item) => item['dt_txt']} //We are using t
                ItemSeparatorComponent={() => {
                    <View style={{backgroundColor: 'grey', height: 10}}></View>
                }}
                ></FlatList>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
})


export default UpcomingWeather