import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
    return (
        <>
            <StatusBar value='auto' />
            <Stack screenOptions={{ headerShown: false }} >
                <Stack.Screen name="login" options={{ title: 'login', headerTitleAlign: 'center' }} />
                <Stack.Screen name="register" options={{ title: 'register', headerTitleAlign: 'center' }} />
            </Stack>
        </>

    )
}

export default AuthLayout