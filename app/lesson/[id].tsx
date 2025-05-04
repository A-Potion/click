import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Lesson() {
    const glob = useGlobalSearchParams();
    const local = useLocalSearchParams();

    return(
    <View>
        <Text>
            Welcome to lesson {local.id}!
        </Text>
    </View>
    )
}