import { useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { Text, ScrollView, StyleSheet, StatusBar, SafeAreaView, Platform } from 'react-native';

import TopBar from "@/components/TopBar";
import VideoPlayer from "@/components/VideoPlayer";
import Instruction from "@/components/Instruction"

export default function Lesson() {

    const glob = useGlobalSearchParams();
    const local = useLocalSearchParams();

    return(
    <SafeAreaView>
    <ScrollView showsVerticalScrollIndicator={Platform.OS === 'web' ? true : false} contentContainerStyle={styles.container}>
        <TopBar 
            bold={local.id + 'Lorem ipsum dolor sit amet, consectetur adipiscing'}
        /> 
        <VideoPlayer />
        <Instruction />
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4287f5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        gap: '8',
    },
    scroll: {
        justifyContent: 'space-between',
        flex: 1,
    }
})