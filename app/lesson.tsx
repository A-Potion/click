import { Text, View, StyleSheet } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from 'expo';

const videoSource = require("@/assets/video/placeholder-video.mp4");


export default function Lesson() {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
    })

    const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

    return(
    <View>
        <Text>
            Hello, world!
        </Text>
        <VideoView player={player} />
    </View>
    )
}