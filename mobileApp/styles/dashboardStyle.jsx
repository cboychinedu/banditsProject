// Importing the necessary modules 
import { StyleSheet, Dimensions } from "react-native";

// Getting the width 
const { width, height } = Dimensions.get("window"); 

// Setting the styles 
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
        marginBottom: 15, 
    },
    movementBox: {
        flexDirection: "column", 
        backgroundColor: "#2C3E50", 
        padding: 10, 
        width: "100%"
    }, 
    movementLabel: {
        fontSize: 18,
        color: '#BDC3C7',
        fontWeight: "bold", 
    }, 
    movementPrediction: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F1FAEE',
        paddingLeft: 5,
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

// Exporting the style 
export default styles; 