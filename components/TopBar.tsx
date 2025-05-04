import { View, Text, StyleSheet } from 'react-native';

type Props = {
    preBold: string;
    bold: string;
    postBold: string;
}

export default function TopBar({ preBold, bold, postBold }: Props ) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}
            selectable={true}
            >
                {preBold} <Text style={[styles.text, { fontWeight: "bold" }]}>{bold}</Text>{postBold}
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