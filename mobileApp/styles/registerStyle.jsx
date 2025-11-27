// Importing the styles 
import { StyleSheet } from "react-native";

// Creating the styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  overlay: {
    // A translucent dark overlay to ensure text/inputs are readable over the background image
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    marginTop: -85, 
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Slightly transparent white input field
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    marginBottom: 25,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#007AFF', // A standard professional blue for primary action
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#ADD8E6', // Light blue for link/secondary action
    fontSize: 14,
    textDecorationLine: 'underline',
  },

}); 

// Exporting the styles 
export default styles; 