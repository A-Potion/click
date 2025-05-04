import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router'

type Props = {
    title: string;
    description: string;
    id: number;
}

export default function LearnTile({ title, description, id }: Props) {
    const router = useRouter();

    return (
    <Pressable
    
    style={styles.container}
    onPress={() => {
        router.navigate('/lesson')
        }}
    >
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
        
    </Pressable>
    
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '96%',
        borderRadius: 8,
        flexDirection: 'column',
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