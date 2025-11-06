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
            <ThemedText style={styles.title} title={true} >The Number 1</ThemedText>
            <Spacer height={20} />
            <ThemedText>Reading from the list...</ThemedText>
            <Spacer />
            <Link href="/login" >
                <ThemedText>Go to Login</ThemedText>
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