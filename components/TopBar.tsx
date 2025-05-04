import { View, Text, StyleSheet } from 'react-native';

export default function TopBar() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Let's learn, <Text style={[styles.text, { fontWeight: "bold" }]}>Joe</Text>.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '96%',
        borderRadius: 20,
    },
    text: {
        margin: 8,
        fontSize: 50,
        alignSelf: 'center',
    },
})