// Importing the necessary modules 
import styles from '../../styles/dashboardStyle';
import React from 'react'; 
import { 
 Pressable, 
 ScrollView, 
 View, 
 Text, 
 SafeAreaView, 
 Image 
} from 'react-native';

// Getting the prediction image 
import predictionImage from "../../assets/images/bandits.jpg"; 

// Setting the prediction data 
const predictionData = {
    label: "Bandits Detected!", 
    accuracy: 98.5, 
    eta: "5 minutes, 3secs", 
    icon: '🚨',
    predictedMovement: "Bandits are moving west bound from your location"
}

// Settin the video feed 
const videoFeeds = [
    { id: 1, name: 'Feed 1 (Northeast)', status: 'Live', emoji: '▶️', color: '#E63946' },
    { id: 2, name: 'Feed 2 (South)', status: 'Live', emoji: '▶️', color: '#1D3557' },
    { id: 3, name: 'Feed 3 (West)', status: 'Offline', emoji: '🛑', color: '#A8DADC' },
]; 

// Card component 
const DashboardCard = ({ children, title }) => (
    <View style={styles.card}> 
        {title && <Text style={styles.cardTitle}>{title}</Text>}
        {children}
    </View>
); 

// Creating the dashboard component 
const Dashboard = () => {
    // Rendering the jsx component 
    return(
        // Use SafeArea view with the container 
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}> 
                <Text style={styles.appTitle}> Dashboard </Text>
                <Text style={styles.systemStatus}> Real Time Analysis </Text>
            </View>

            {/* Adding the scrool view */}
            <ScrollView contentContainerStyle={styles.scrollContent}> 
                {/* Prediction Summary (ETA, Lablel, Accuracy) */}
                <DashboardCard title="Threat Assessment"> 
                    <Text style={styles.predictionIcon}>{predictionData.icon}</Text>
                    <Text style={styles.predictionLabel}>{predictionData.label}</Text>
                    <Text style={styles.accuracyText}>Accuracy: {predictionData.accuracy}%</Text>
                    
                    <View style={styles.etaBox}>
                        <Text style={styles.etaLabel}>ETA to Target:</Text>
                        <Text style={styles.etaValue}>{predictionData.eta}</Text>
                    </View>
                    <View style={styles.movementBox}>
                        <Text style={styles.movementLabel}> Movement:</Text>
                        <Text style={styles.movementPrediction}>{predictionData.predictedMovement}</Text>
                    </View>
                </DashboardCard>

                {/* Last Analyzed Image */}
                <DashboardCard title="Last Analyzed Frame"> 
                    <Image 
                        source={predictionImage}
                        style={styles.analyzedImage}
                        resizeMode='cover'
                    /> 
                    <Text style={styles.imageCaption}>Timestamp: 2024-05-15 14:30:15 UTC</Text>
                </DashboardCard>

                {/* Video frames section  */}
                <View style={styles.sectionTitleContainer}> 
                    <Text style={styles.sectionTitle}> Live Surveillance Feeds </Text>
                </View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalScroll}
                >
                    {videoFeeds.map(feed => (
                        <Pressable key={feed.id} style={[styles.videoButton, {borderColor: feed.color}]}>
                            <Text style={[styles.videoButtonIcon, {color: feed.color}]}>{feed.emoji}</Text>
                            <Text style={styles.videoButtonTitle}>{feed.name}</Text>
                            <Text style={[styles.videoButtonStatus, {color: feed.color}]}>{feed.status}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the dashboard 
export default Dashboard;