import { SafeAreaView, StyleSheet, StatusBar, Platform } from 'react-native';

export default function BoilerView() {
    return (
        <SafeAreaView style={styles.boiler}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    boiler: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
})