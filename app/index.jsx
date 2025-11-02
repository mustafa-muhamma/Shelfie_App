import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/images/logo.png'
import { Link } from 'expo-router'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={{ width: 100, height: 100, marginBottom: 20 }} />
            <Text style={styles.title}>The Number 1</Text>
            <Text style={{ marginVertical: 20 }}>Reading from the list...</Text>
            <Link href="/contact" style={{ marginVertical: 20 }}>Go to Contact</Link>
        </View>

    )
}

export default Home

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
    },
})