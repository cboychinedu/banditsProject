// Importing the necessary modules 
import styles from '../../styles/videoFeedStyles';
import { Video } from 'expo-av'; 
import { useEffect, useState } from "react";
import { 
    ScrollView, 
    View, 
    Text, 
    SafeAreaView, 
    Pressable, 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from "expo-router";
const localVideo = require("../../assets/videos/video.mp4"); 

// Creating the video feed component 
const VideoFeed = ({ feedId }) => {
    // Setting the router 
    const router = useRouter(); 

    // Extract all the parameters you passed from the previous screen
    const params = useLocalSearchParams();

    // Setting the state for the video feed 
    const [video, setVideo] = useState(); 

    // 
    // console.log(params);

    // Rendering the jsx component 
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Setting the header  */}
            <View style={styles.header}> 
                {/* Use router.back for the back button */}
                <Pressable onPress={() => router.back()} style={styles.backButton}> 
                    <Ionicons name="chevron-back-outline" size={30} color="#F1FAEE" />
                </Pressable>
                <Text style={styles.videoTitle}> {params.name} </Text>
            </View>


            <View style={styles.videoContainer}> 
                {/* Video component requires sizing styles */}
                <Video 
                    source={localVideo}
                    // source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                    style={styles.videoPlayer} // Apply the new style
                    useNativeControls={true} // Recommended prop for controls
                    shouldPlay={false} // Start paused, let user press play
                    resizeMode="cover"
                    isLooping={true} // Optional: loop the video
                />
            </View>
        </SafeAreaView>
    )
}

// Exporting the video feed component 
export default VideoFeed;