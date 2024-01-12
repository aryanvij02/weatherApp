import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import IconText from "../components/IconText";
import moment from 'moment'

const City = ({weatherData}) => {
    const { container, imageLayout, cityText, cityName, countryName, populationText, populationWrapper, sunWrapper, sunText, rowLayout} = styles
    console.log(`Weather data ${weatherData.sunset}`)
    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={imageLayout}>
                <View style={styles.contentContainer}>
                    <Text style={[cityText, cityName]}>{name}</Text>
                    <Text style={[cityText, countryName]}>{country}</Text>
                    <View style={[rowLayout, populationWrapper]}>
                        <IconText icon={'user'} size={50} color={'lightblue'} text={`Population ${population}`} bodyTextStyles={populationText}></IconText>
                    </View>
                    <View style={[rowLayout, sunWrapper]}>
                        <IconText icon={"sunrise"} size={50} color={'white'} text={moment(sunrise).utcOffset(weatherData.timezone / 60).format('h:mm:ss a')} bodyTextStyles={sunText}></IconText>
                        <IconText icon={"sunset"} size={50} color={'white'} text={moment(sunset).utcOffset(weatherData.timezone / 60).format('h:mm:ss a ')} bodyTextStyles={sunText}></IconText>
                    </View>
                
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
    },

    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },

    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: "center",
        alignSelf: "center",
        fontWeight: "bold",
        color: 'white',
    },
    populationWrapper: {
        justifyContent: "center",
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'lightblue',
    },
    sunWrapper: {
        marginTop: 30,
        justifyContent: "space-around",
    },
    
    sunText : {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: "row",
        alignItems: "center",
    }
})

export default City