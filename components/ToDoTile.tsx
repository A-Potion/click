import { Text, View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function ToDoTile() {
    const [isChecked, setIsChecked ] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Lorem ipsum dolor sit amet.
                </Text>
            </View>
            <View style={styles.descriptionContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
                <Checkbox value={isChecked} onValueChange={setIsChecked} style={styles.checkbox} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '96%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingBottom: 6,
        paddingTop: 6,
    },
    titleContainer: {

    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    textContainer: {
        flex: 1,
        flexShrink: 1,
        paddingRight: 6,
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        width: '94%',
    },
    checkbox: {
        transform: 'scale(1.5)',
    },
    description: {
        fontSize: 20,
    }
})