import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../component/ThemedView'
import ThemedText from '../component/ThemedText'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact Page</ThemedText>

            <Link href="/" style={{ marginVertical: 20, textDecorationLine: 'underline' }}>
                <ThemedText>back to Home page</ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})