import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="login" options={{ title: 'login', headerTitleAlign: 'center' }} />
            <Stack.Screen name="register" options={{ title: 'register', headerTitleAlign: 'center' }} />
        </Stack>
    )
}

export default AuthLayout