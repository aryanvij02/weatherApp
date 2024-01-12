import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from 'react-native'

const Counter = () => {
    const [count, setCount] = useState(0) //This is a form of array destructuring
    const [newCount, setNewCount] = useState(0)

    useEffect(() => {
        console.log(`Your count`)
        return () => {console.log("Use effect cleanup")}
    }, [count])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count} + ${newCount}`}</Text>
            <Button 
            color={'red'} 
            title={'Increase the count'}
            onPress = {() => setCount(count + 1)}/>
            <Button
            color={'green'} 
            title={'Decrease the count'}
            onPress = {() => setCount(count - 1)}/>
            <Button
            color={'green'} 
            title={'Decrease the count'}
            onPress = {() => setNewCount(newCount - 1)}/>
            <Button
            color={'green'} 
            title={'Decrease the count'}
            onPress = {() => setNewCount(newCount - 1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'orange',
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25,
    },

})

export default Counter