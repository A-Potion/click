import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

import TopBar from "@/components/TopBar";
import VideoPlayer from "@/components/VideoPlayer";

export default function Lesson() {

    const glob = useGlobalSearchParams();
    const local = useLocalSearchParams();

    return(
    <SafeAreaView style={styles.container}>
        <TopBar 
            bold={local.id + 'Lorem ipsum dolor sit amet, consectetur adipiscing'}
        />
        <VideoPlayer />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4287f5',
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
    },
})