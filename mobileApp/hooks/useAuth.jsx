// Importing the necessary modules 
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store'; 

// Creating the auth component 
const Auth = () => {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true); 

    // Using the use effect hook 
    useEffect(() => {
        const loadToken = async () => {
            try {
                // Read the stored token
                const storedToken = await SecureStore.getItemAsync('userToken');
                setToken(storedToken);
            } catch (e) {
                console.error("Failed to load token:", e);
            } finally {
                setIsLoading(false);
            }
        };
        loadToken();
    }, []);

    // Token will be null if no token is found 
    return { token, isLoading }; 

}

// Exporting the componnet 
export default Auth; 