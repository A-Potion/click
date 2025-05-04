import { StyleSheet, Text, View } from 'react-native';

import LearnTile from "@/components/LearnTile"
import TopBar from "@/components/TopBar"

export default function Index() {
    return(
        <View style={styles.container}>
            <TopBar></TopBar>
            <LearnTile
            id={0}
            title={"Sit & Stay: Foundation Commands"}
            description={'Teaching your dog to "sit" and "stay" is essential for safety and daily structure. These commands help with impulse control and provide the basis for more advanced training. Use treats and praise to encourage your dog to follow through consistently. Start in a distraction-free environment and gradually increase the challenge. Practice short sessions daily to reinforce good behavior and build trust.'}
            />
            <LearnTile
            id={1}
            title={"Leash Manners: Walking Without Pulling"}
            description={"Walking calmly on a leash makes outings more enjoyable for both you and your dog. Begin by using a well-fitted harness or collar and a standard 4–6 foot leash. Teach your dog to walk beside you by stopping or turning when they pull. Reward them for staying close and walking at your pace. Patience and consistency are key—don't expect perfection right away."}
/>
        <LearnTile
        id={2}
        title={"House Training Basics"}
        description={"House training requires a consistent schedule, supervision, and positive reinforcement. Take your dog outside frequently, especially after meals, naps, or playtime. Use a designated potty spot and praise them immediately after they go. If accidents happen, avoid punishment—redirect with patience instead. Crate training can also be a helpful tool in establishing good bathroom habits."}
        />
        <LearnTile
        id={3}
        title={"Socialization Skills: Meeting People & Pets"}
        description={"Proper socialization helps your dog become confident and well-behaved around others. Introduce your dog gradually to new people, environments, and friendly pets in a controlled way. Use treats and calm praise to create positive associations. Avoid overwhelming situations and respect your dog’s comfort level. Early and positive experiences can prevent fear and aggression later on."}
        />
        <LearnTile
        id={4}
        title={"Leave It & Drop It: Impulse Control for Safety"}
        description={'Teaching "leave it" and "drop it" helps prevent your dog from grabbing dangerous items or refusing to let go of something. Start with treats or toys during calm play, and reward compliance generously. Practice regularly in low-stress situations before trying it in real-world scenarios. These commands can be lifesaving, especially on walks or in new environments. Keep training fun and consistent to build a strong response.'}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4287f5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1%',
    },
    text: {
        alignContent: 'center',
        color: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})