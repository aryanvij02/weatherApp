import React from "react"
import {View, Text, StyleSheet} from 'react-native'

const RowText = (props) => {
    const { wrapperStyle, styleOne, styleTwo, textOne, textTwo } = props

    return (
        <View style={wrapperStyle}>
            <Text style={styleOne}>{textOne}</Text>
            <Text style={styleTwo}>{textTwo}</Text>
        </View>
    )

}



const styles = StyleSheet.create({

})

export default RowText