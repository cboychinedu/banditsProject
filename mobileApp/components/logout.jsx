// Importing the necessary modules 
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";
import { Pressable, Text, Alert } from "react-native";

// Logout Button Component
const LogoutButton = ({ tintColor }) => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            // 1. Clear the authentication token
            await SecureStore.deleteItemAsync("userToken");
            
            // Use replace to prevent the user from navigating back to the dashboard
            router.replace('/'); 
            
        } catch (error) {
            // Log the error 
            console.error("Logout failed:", error);
            
            // Optionally show an alert here
            Alert.alert(error); 
        }
    };

    // Rendering the jsx button 
    return (
        <Pressable 
            onPress={handleLogout} 
            style={{ marginRight: 15, padding: 5 }}
        >
            <Text style={{ color: tintColor, fontSize: 16, fontWeight: 'bold' }}>
                Logout
            </Text>
        </Pressable>
    );
};

// Exporting the logout button 
export default LogoutButton; 