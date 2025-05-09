import { StyleSheet, Text, Platform, StatusBar, ScrollView, SafeAreaView, View } from 'react-native'

import ToDoTile from '@/components/ToDoTile';

export default function ToDo() {
    return (
    <SafeAreaView style={styles.scroll}>
        <View style={styles.container}>
        <Text>
            Hello world
        </Text>
        <ToDoTile />
        </View>
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
        flex: 1,
    },
    scroll: {
        flex: 1,
        backgroundColor: '#4287f5',
    }
})