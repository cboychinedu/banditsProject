// Importing the necessary modules
import { StyleSheet, Dimensions } from "react-native";

// Getting the width and height 
const { width, height } = Dimensions.get("window");

// Setting the styles 
const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#1E1E1E', // Dark background for the entire screen
    },
    videoTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: '#F1FAEE', // White/Off-White text
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
    videoContainer: {
      width: '100%',
      marginTop: 20,
      alignItems: 'center', 
  },
    backButton: {
        position: 'absolute',
        left: 10,
        top: 12,
        padding: 5,
        zIndex: 10,
    },
  videoPlayer: {
      marginTop: 10,
      padding: 20, 
      width: width * 0.9, 
      height: height * 0.3,
      backgroundColor: '#000',
  },
}); 

// Exporting the styles 
export default styles; 