import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';

const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 70,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen
                name="books"
                options={{
                    title: 'Books',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'book' : 'book-outline'}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather
                            name={focused ? 'edit' : 'edit-3'}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <MaterialIcons
                            name={focused ? 'person' : 'person-outline'}
                            size={26}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default DashboardLayout;
