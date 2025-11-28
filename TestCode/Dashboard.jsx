// Importing the necessary modules 
import React from 'react';
import { 
    Pressable, 
    ScrollView, 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Dimensions,
    Image // Added Image for displaying analyzed image
} from "react-native";
// Assuming you have a placeholder image for the analyzed image
// If using real images, you'd replace this with the actual source.
import placeholderImage from "../../assets/images/image.jpg"; 
// Import router if needed for navigation, though not required for this task
import { useRouter } from 'expo-router'; 

// Setting the width for responsive styling
const { width } = Dimensions.get('window');

// --- Placeholder Data ---
const PREDICTION_DATA = {
    label: 'Bandit Detected',
    accuracy: 98.5,
    eta: '5 minutes',
    icon: '🚨',
};

const VIDEO_FEEDS = [
    { id: 1, name: 'Feed 1 (Northeast)', status: 'Live', emoji: '▶️', color: '#E63946' },
    { id: 2, name: 'Feed 2 (South)', status: 'Live', emoji: '▶️', color: '#1D3557' },
    { id: 3, name: 'Feed 3 (West)', status: 'Offline', emoji: '🛑', color: '#A8DADC' },
];

// --- Sub-Components ---

// Card component used for various sections
const DashboardCard = ({ children, title }) => (
    <View style={styles.card}>
        {title && <Text style={styles.cardTitle}>{title}</Text>}
        {children}
    </View>
);

// Creating the Dashboard component 
const Dashboard = () => {
    // You can initialize the router here if you need navigation
    // const router = useRouter();
    
    // Rendering the jsx 
    return(
        // Use SafeAreaView with the container styles
        <SafeAreaView style={styles.safeArea}> 
            <View style={styles.header}>
                <Text style={styles.appTitle}>Dashboard</Text>
                <Text style={styles.systemStatus}>REAL-TIME ANALYSIS</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}> 
                
                {/* 1. Prediction Summary (ETA, Label, Accuracy) */}
                <DashboardCard title="Threat Assessment">
                    <Text style={styles.predictionIcon}>{PREDICTION_DATA.icon}</Text>
                    <Text style={styles.predictionLabel}>{PREDICTION_DATA.label}</Text>
                    <Text style={styles.accuracyText}>Accuracy: {PREDICTION_DATA.accuracy}%</Text>
                    
                    <View style={styles.etaBox}>
                        <Text style={styles.etaLabel}>ETA to Target:</Text>
                        <Text style={styles.etaValue}>{PREDICTION_DATA.eta}</Text>
                    </View>
                </DashboardCard>

                {/* 2. Last Analyzed Image */}
                <DashboardCard title="Last Analyzed Frame">
                    <Image
                        source={placeholderImage} 
                        style={styles.analyzedImage}
                        resizeMode="cover"
                    />
                    <Text style={styles.imageCaption}>Timestamp: 2024-05-15 14:30:15 UTC</Text>
                </DashboardCard>

                {/* 3. Video Frames Section */}
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Live Surveillance Feeds</Text>
                </View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.horizontalScroll}
                >
                    {VIDEO_FEEDS.map(feed => (
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

// Exporting the dashbaord page 
export default Dashboard;

// --- STYLING (Based on Dark Theme from index.jsx) ---

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#1E1E1E', // Dark background for the entire screen
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        backgroundColor: '#1C2833', 
    },
    appTitle: {
        fontSize: 30,
        fontWeight: '900',
        color: '#F1FAEE', // White/Off-White text
    },
    systemStatus: {
        fontSize: 14,
        color: '#A8DADC', // Light blue accent text
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    card: {
        width: width * 0.9,
        backgroundColor: '#1C2833', // Dark background for cards
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 8,
        borderWidth: 1,
        borderColor: '#2C3E50', // Subtle border
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#A8DADC', // Accent color for title
        borderBottomWidth: 2,
        borderBottomColor: '#A8DADC',
        paddingBottom: 5,
    },
    // --- Prediction Styles ---
    predictionIcon: {
        fontSize: 60,
        marginBottom: 10,
    },
    predictionLabel: {
        fontSize: 24,
        fontWeight: '900',
        color: '#E63946', // Red accent for detection
        marginBottom: 5,
    },
    accuracyText: {
        fontSize: 18,
        color: '#F1FAEE',
        marginBottom: 20,
    },
    etaBox: {
        flexDirection: 'row',
        backgroundColor: '#2C3E50',
        padding: 10,
        borderRadius: 8,
        width: '100%',
        justifyContent: 'space-between',
    },
    etaLabel: {
        fontSize: 16,
        color: '#BDC3C7',
    },
    etaValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F1FAEE',
    },
    // --- Analyzed Image Styles ---
    analyzedImage: {
        width: '100%',
        height: width * 0.5, // 50% of screen width height
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#A8DADC',
    },
    imageCaption: {
        fontSize: 14,
        color: '#BDC3C7',
    },
    // --- Video Feeds Styles ---
    sectionTitleContainer: {
        width: width * 0.9,
        paddingVertical: 10,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1FAEE',
        paddingLeft: 5,
    },
    horizontalScroll: {
        width: width,
        paddingLeft: 20,
        marginBottom: 20,
    },
    videoButton: {
        width: width * 0.35, // About 3.5 buttons across the screen
        height: 120,
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        marginRight: 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3, // Border color changes based on status
    },
    videoButtonIcon: {
        fontSize: 30,
        marginBottom: 5,
    },
    videoButtonTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F1FAEE',
        textAlign: 'center',
    },
    videoButtonStatus: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600',
    }
});