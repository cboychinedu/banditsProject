// Importing the necessary modules 
import { Dimensions, StyleSheet } from 'react-native';

// Setting the width 
const { width } = Dimensions.get('window');

// Setting the styles 
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    paddingTop: 20, 
  },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#2C3E50',
        backgroundColor: '#1C2833',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#A8DADC',
    }, 
  header: {
    padding: 20,
    alignItems: 'center',
    // 2. HEADER BORDERS: Updated colors for contrast on black background
    borderBottomWidth: 1,
    borderBottomColor: '#2C3E50', // Dark border for subtle separation
    backgroundColor: '#1C2833', // Very dark grey for header background
  },
  appTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#F1FAEE', // White/Off-White text (good contrast)
  },
  systemStatus: {
    fontSize: 14,
    color: '#A8DADC', // Light blue accent text
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 25, 
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  card: {
    width: width * 0.9,
    minHeight: 200,
    // 3. CARD BACKGROUND: Changed from 'white' to a dark grey
    backgroundColor: '#1E1E1E', 
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffffff', // White shadow (subtle effect on dark theme)
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  cardIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    // 4. CARD TITLE TEXT: Changed to white/light color
    color: '#F1FAEE', 
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    // 5. CARD DESCRIPTION TEXT: Changed to a lighter color
    color: '#BDC3C7', 
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  dots: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    // 6. PAGINATION ARROWS: Changed to white/light color
    color: '#1D3557', 
    paddingHorizontal: 10,
  },
  navContainer: {
    padding: 20,
    // 7. NAVIGATION BORDER: Updated color for contrast
    borderTopWidth: 1,
    borderTopColor: '#2C3E50',
  },
  navButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});

// Exporting the styles 
export default styles; 