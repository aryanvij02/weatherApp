/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
    const { icon, text, color, bodyTextStyles } = props
    const { container, textTheme } = styles
    return (
        <View style={container}>
            <Feather name={icon} size={50} color={color}></Feather>
            <Text style={[textTheme, bodyTextStyles]}>{text}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight: 'bold',
    },
    container: {
        alignItems: "center"
    }

})

export default IconText