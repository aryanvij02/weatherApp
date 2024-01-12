import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>Sorry Something Went Wrong</Text>
            <Feather name={"frown"} size={100} color={'white'}></Feather>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    errorMessage: {
        fontSize: 30,
        color: 'white',
        marginHorizontal: 10,
        textAlign: 'center',
        marginBottom: 20,
    }
})
export default ErrorItem