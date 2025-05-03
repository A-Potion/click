import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, world!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242120',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignContent: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})