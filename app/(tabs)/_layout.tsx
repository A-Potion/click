import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#4287f5',
        }}
        >
            <Tabs.Screen name="index"
            options={{
                title: 'Learn',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'school-sharp' : 'school-outline'} color={color} size={24} />
                ),
                }} />
            <Tabs.Screen name="todo"
            options={{
                title: 'To-do',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'list-sharp' : 'list-outline'} color={color} size={24} />
                ),
                }}
                />
        </Tabs>
    );
}