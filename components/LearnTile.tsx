import { View, Text, StyleSheet } from 'react-native';

export default function LearnTile() {
    return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text
            style={styles.title}
            selectable={true}
            >
                Hello there!
            </Text>
        </View>
        <View style={styles.descriptionContainer}>
            <Text
                ellipsizeMode='head'
                style={styles.description}
                selectable={true}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
        </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '12%',
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    title: {
        position: 'relative',
        fontSize: 22,
        fontWeight: 'bold',
        left: 22,
        top: 4,
    },
    descriptionContainer: {
        flex: 5,
        flexShrink: 1,
        alignSelf: 'flex-end',
        alignContent: 'flex-start',
        padding: 6,
    },
    description: {
        fontSize: 16,
    },
})