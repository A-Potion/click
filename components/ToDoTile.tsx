import { Text, View, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

import { SwipeListView } from 'react-native-swipe-list-view';

import Ionicons from '@expo/vector-icons/Ionicons';
import { JumpingTransition } from 'react-native-reanimated';


export default function ToDoTile() {
    const listViewData = Array(20)
    .fill("")
    .map((_, i) => ({ key: `${i}`, text: `item #${i}` }));
    
    return(
        <SwipeListView
        style={styles.slv}
        data={listViewData}
        renderItem={ (data, rowMap) =>
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
        }
        renderHiddenItem={ ( data, rowMap ) =>
            <View style={styles.doneStyle}>
            <Ionicons name='checkmark-outline' size={70} />
            </View>
            
        }
        rightOpenValue={-75}
        disableRightSwipe={true}
        stopRightSwipe={-110}
        ItemSeparatorComponent={() => <View style={{height: 6}} />}
        showsVerticalScrollIndicator={false}
>
           
            </SwipeListView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
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
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingLeft: 0,
        paddingBottom: 6,
        paddingTop: 6,
        borderRadius: 8,
        flex: 1,
    },
    slv: {
        flex: 1,
        width: '96%',
    }
})