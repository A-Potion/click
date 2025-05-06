import { useEvent } from 'expo';
import { Asset } from 'expo-asset';
import { useVideoPlayer, VideoView } from 'expo-video';
import { Pressable, StyleSheet, View, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function VideoPlayer() {
    const videoUri = require('@/assets/videos/placeholder-video.mp4');

    const uri = Asset.fromModule(videoUri).localUri || Asset.fromModule(videoUri).uri;

    const player = useVideoPlayer(uri, player => {
        player.loop = false;
    });

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return (
        <View style={styles.container}>
            <VideoView style={styles.video} player={player} nativeControls={true} />
            {/* <Pressable
            onPress={
                () => {
                    if (isPlaying) {
                        player.pause();
                    } else {
                        player.play();
                     }
                    }
                }
            > */}
            {/* <Ionicons  size={240} name={isPlaying ? 'pause-sharp' : 'play-sharp'} />
            </Pressable> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '96%',
    },
    video: {
        alignSelf: 'center',
        aspectRatio: 16 / 9,
        width: '100%',
    }
})