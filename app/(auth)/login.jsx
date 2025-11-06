import { StyleSheet } from 'react-native'
import ThemedView from '../../component/ThemedView'
import ThemedText from '../../component/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../component/Spacer'

export default function Register() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>Register Page</ThemedText>
            <Spacer height={20} />
            <Link href='/register'>
                <ThemedText>Register Now</ThemedText>
            </Link>
        </ThemedView>
    )
}

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