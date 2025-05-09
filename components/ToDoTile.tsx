import { Text, View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import Swiper from 'react-native-swiper';

import Ionicons from '@expo/vector-icons/Ionicons';
import { JumpingTransition } from 'react-native-reanimated';

export default function ToDoTile() {
    const [isChecked, setIsChecked ] = useState(false);

    return(
        <View style={styles.centralContainer} >
            <Swiper autoplay={false} loop={false} style={styles.swiper} showsButtons={false}>
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
            <View style={styles.arrowContainer}>
                <Ionicons name='arrow-back' size={34} />
                <Text>
                    Mark done
                </Text>
            </View>
            </View>
            </View>
            <View style={styles.doneStyle}>
                <Text>
                    Meow
                </Text>
            </View>
            </Swiper>
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
        height: 'auto',

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
    description: {
        fontSize: 20,
    },
    arrowContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    swiper: {
        alignContent: 'center',
        alignSelf: 'center',
    }, 
    doneStyle: {
        backgroundColor: '#21d1a5',
        width: '96%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 0,
        paddingLeft: 0,
        paddingBottom: 6,
        paddingTop: 6,
    },
    centralContainer: {

    }
})