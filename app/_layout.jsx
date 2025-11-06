import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    return (
        <>
            <StatusBar value='auto' />
            <Stack screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.iconColor
            }}>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="contact" options={{ title: 'Contact', headerTitleAlign: 'center' }} />
            </Stack>
        </>

    )
}

export default RootLayout

const styles = StyleSheet.create({})