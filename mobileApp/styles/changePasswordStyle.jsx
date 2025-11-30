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
    // --- Info Container ---
    infoContainer: {
        width: width * 0.9,
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#2C3E50',
    },
    infoText: {
        fontSize: 14,
        color: '#BDC3C7',
        lineHeight: 20,
    },
    // --- Form Card ---
    formCard: {
        width: width * 0.9,
        backgroundColor: '#1C2833',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 4,
        overflow: 'hidden', // To ensure borders/dividers don't overflow rounded corners
        borderWidth: 1,
        borderColor: '#A8DADC',
    },
    input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#F1FAEE',
        backgroundColor: '#1C2833',
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },
    middleInput: {
        borderTopWidth: 1,
        borderTopColor: '#34495E',
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },
    // Remove bottom border from the last input in the card
    input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#F1FAEE',
        backgroundColor: '#1C2833',
    },
    // Specific styles for the three inputs to handle internal dividers
    // Current Password Input (top one)
    input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#F1FAEE',
        backgroundColor: '#1C2833',
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },
    // New Password Input (middle one)
    middleInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },
    // Confirm Password Input (bottom one - no bottom border needed)
    // The previous definition of 'input' will apply to the last TextInput,
    // so we need a clean style for the last element, but since React Native 
    // applies styles sequentially, we'll redefine a specific style that removes 
    // the border for the last one if it were used separately. For simplicity, 
    // we use a single input style and rely on the card's overflow hidden.
    // Let's adjust the card to visually manage the dividers better.

    // A slightly cleaner way for the inputs:
    input: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 15,
        fontSize: 16,
        color: '#F1FAEE',
        backgroundColor: '#1C2833',
    },
    inputDivider: {
        borderBottomWidth: 1,
        borderBottomColor: '#34495E',
    },


    // --- Button ---
    changePasswordButton: {
        width: width * 0.9,
        backgroundColor: '#E63946', // Red accent color for primary action
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
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
    // --- Error Message ---
    errorContainer: {
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8B0000', // Dark red background for error
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
        elevation: 3,
    },
    errorText: {
        fontSize: 14,
        color: '#F1FAEE',
        marginLeft: 10,
        flexShrink: 1,
    }
});

// Exporting the styles
export default styles;