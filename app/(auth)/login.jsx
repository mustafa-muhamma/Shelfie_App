import { Pressable, StyleSheet, Text } from 'react-native'
import ThemedView from '../../component/ThemedView'
import ThemedText from '../../component/ThemedText'
import { Link } from 'expo-router'
import Spacer from '../../component/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../component/ThemedButton'

export default function Login() {
    const handleLogin = () => {
        console.log('Login')
    }
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.title}>Login Page</ThemedText>
            <Spacer height={20} />
            <ThemedButton onPress={handleLogin}>
                <Text style={{ color: '#f2f2f2', textAlign: 'center' }}>Login</Text>
            </ThemedButton>
            <Spacer />
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