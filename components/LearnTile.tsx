import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router'

type Props = {
    title: string;
    description: string;
    id: number;
}

export default function LearnTile({ title, description, id }: Props) {
    const router = useRouter();

    return (
    <Link href={{
        pathname: "/lesson/[id]",
        params: { id: id },
        }} asChild>
    <Pressable>
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.title}
            >
               {title}
            </Text>
        </View>
        <View style={styles.descriptionContainer}>
            <Text
                ellipsizeMode='tail'
                numberOfLines={2}
                style={styles.description}
            >
                {description}
            </Text>
        </View>
    </View>
    </Pressable>
    </Link>
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '96%',
        borderRadius: 8,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    titleContainer: {
        left: 8,
        top: 4,
        maxWidth: '90%',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        overflow: 'hidden',
    },
    descriptionContainer: {
        padding: 6,
        flexShrink: 1,
    },
    description: {
        fontSize: 20,
    },
})