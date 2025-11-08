import { StyleSheet, Text } from 'react-native'
import ThemedView from '../../component/ThemedView'
import ThemedText from '../../component/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../component/Spacer'
import ThemedButton from '../../component/ThemedButton'

export default function Register() {
    const handleReigister = () => {
        console.log('Register')
    }
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>Register Page</ThemedText>
            <Spacer height={20} />
            <ThemedButton onPress={handleReigister}>
                <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Register</Text>
            </ThemedButton>
            <Spacer />
            <Link href='/login'>
                <ThemedText>Go to Login</ThemedText>
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