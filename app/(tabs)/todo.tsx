import { StyleSheet, Text, Platform, StatusBar, ScrollView, SafeAreaView } from 'react-native'

import ToDoTile from '@/components/ToDoTile';

export default function ToDo() {
    return (
    <SafeAreaView style={styles.scroll}>
        <ScrollView showsVerticalScrollIndicator={Platform.OS === 'web' ? true : false} contentContainerStyle={styles.container}>
        <Text>
            Hello world
        </Text>
        <ToDoTile />
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4287f5',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

        alignItems: 'center',
        justifyContent: 'center',
        gap: '1%',
    },
    scroll: {
        flex: 1,
        backgroundColor: '#4287f5',
    }
})