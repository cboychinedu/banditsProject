// hooks/useAuth.js (Conceptual file)
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export function Auth() {
    const [token, setToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    // token will be null if no token is found, or the string if found.
    return { token, isLoading }; 
}