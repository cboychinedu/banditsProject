import * as SecureStore from 'expo-secure-store';
// import { useRouter } from 'expo-router'; // If using Expo Router

const handleLoginSuccess = async (token) => {
    try {
        // 1. Store the token securely
        await SecureStore.setItemAsync('userToken', token);
        
        // 2. Navigate away from the login screen
        // router.replace('/'); 
        
    } catch (error) {
        console.error("Error saving token:", error);
    }
};