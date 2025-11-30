// Importing necessary modules from React Native
import { StyleSheet, Dimensions } from 'react-native';

// Getting device width for responsive design
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1E1E1E', // Darkest background
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        backgroundColor: '#1C2833',
        flexDirection: 'column',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 10,
        top: 20,
        padding: 5,
        zIndex: 10,
    },
    appTitle: {
        fontSize: 26,
        fontWeight: '900',
        color: '#F1FAEE',
        marginTop: 5,
    },
    systemStatus: {
        fontSize: 14,
        color: '#A8DADC',
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    // --- Section Titles ---
    sectionTitleContainer: {
        width: width * 0.9,
        paddingVertical: 10,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#A8DADC', // Use accent color for section titles
        paddingLeft: 5,
    },
    // --- Card (Container for rows) ---
    card: {
        width: width * 0.9,
        backgroundColor: '#1C2833',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2C3E50',
    },
    // --- Preference Row ---
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },
    settingTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    settingLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F1FAEE',
        marginBottom: 3,
    },
    settingDescription: {
        fontSize: 12,
        color: '#BDC3C7',
    },
    // --- Save Button ---
    saveButton: {
        width: width * 0.9,
        backgroundColor: '#E63946', // Red accent color for primary action
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1FAEE',
    },
    disabledButton: {
        backgroundColor: '#34495E', // Muted color when disabled
        opacity: 0.6,
    },
    pressedButton: {
        backgroundColor: '#C8323E', // Slightly darker red on press
    },
});

// Exporting the styles
export default styles;