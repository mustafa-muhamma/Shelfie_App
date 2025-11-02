import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>

            <Link href="/" style={{ marginVertical: 20, textDecorationLine: 'underline' }}>back to Home</Link>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})