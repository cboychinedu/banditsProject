// app/_layout.js (RootLayout.js)
import { Stack, Redirect, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth'; // 👈 Import your hook

// List of UNPROTECTED routes
const UNPROTECTED_ROUTES = ['/login/login', '/register']; 

export default function RootLayout() {
    const { token, isLoading } = useAuth();

    // Hide the splash screen until we know the auth status
    useEffect(() => {
        if (!isLoading) {
            SplashScreen.hideAsync();
        }
    }, [isLoading]);

    if (isLoading) {
        // Keep the splash screen visible while checking token
        return <SplashScreen />; 
    }

    return (
        <Stack>
            {/*
                1. If the user is NOT authenticated (token is null) 
                AND the current route is NOT an unprotected route, 
                redirect them to the login screen.
            */}
            {!token && (
                <Stack.Screen 
                    name="(tabs)" // Or any screen you want to protect
                    options={{ 
                        headerShown: false,
                        // Redirect all protected routes to login
                        redirect: true 
                    }}
                />
            )}
            
            {/* Login and Register screens (unprotected) */}
            <Stack.Screen name="login/login" options={{ title: "System Login", headerShown: true }} />
            <Stack.Screen name="register" options={{ title: "Register" }} /> 
            
            {/* Other routes */}
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="contact" options={{ title: "Contact" }} /> 
            
            {/* Use an inner group for protected routes if your app is complex */}
            {/* <Stack.Screen name="(app)" options={{ headerShown: false }} /> */}
        </Stack>
    );
}