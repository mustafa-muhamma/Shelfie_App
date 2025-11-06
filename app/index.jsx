import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../component/ThemedView'
import ThemedLogo from '../component/ThemedLogo'
import Spacer from '../component/Spacer'
import ThemedText from '../component/ThemedText'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer />
            <ThemedText style={styles.title} title={true} >The Number 1</ThemedText>
            <ThemedText style={{ marginVertical: 20 }}>Reading from the list...</ThemedText>
            <Link href="/contact" style={{ marginVertical: 20 }}>
                <ThemedText>Go to Contact</ThemedText>
            </Link>
        </ThemedView>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})