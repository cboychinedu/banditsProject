// Importing necessary modules from React Native
import { StyleSheet, Dimensions } from 'react-native';

// Getting device width for responsive design
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#1E1E1E', 
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
    // --- Profile Summary Card ---
    profileCard: {
        width: width * 0.9,
        backgroundColor: '#1C2833', 
        borderRadius: 15,
        padding: 30,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 8,
        borderWidth: 1,
        borderColor: '#A8DADC', // Highlight border
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50, // Circular image
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#E63946', // Red accent border
    },
    profileUsername: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#F1FAEE',
        marginBottom: 5,
    },
    profileRole: {
        fontSize: 16,
        color: '#A8DADC',
    },
    // --- Account Details Card ---
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
    detailsCard: {
        width: width * 0.9,
        backgroundColor: '#2C3E50', // Slightly lighter dark background
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        elevation: 4,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#34495E', // Lighter divider
    },
    infoIcon: {
        marginRight: 15,
    },
    infoTextView: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: '#BDC3C7',
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F1FAEE',
    },
    // --- Settings Buttons ---
    settingsButton: {
        flexDirection: 'row',
        width: width * 0.9,
        backgroundColor: '#1C2833',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#2C3E50',
    },
    settingsText: {
        flex: 1,
        fontSize: 16,
        color: '#F1FAEE',
        marginLeft: 15,
    }
});

// Exporting the styles 
export default styles;