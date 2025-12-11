// Importing the necessary modules
import * as SecureStore from "expo-secure-store";
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
    ScrollView,
    View,
    Text,
    Alert,
    SafeAreaView,
    Pressable,
    Switch,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/notificationPreferencesStyle"; // Import component-specific styles

// Card component used for displaying a single preference setting
const PreferenceRow = ({ label, description, isEnabled, toggleSwitch }) => (
    <View style={styles.settingRow}>
        <View style={styles.settingTextContainer}>
            <Text style={styles.settingLabel}>{label}</Text>
            <Text style={styles.settingDescription}>{description}</Text>
        </View>
        <Switch
            trackColor={{ false: "#767577", true: "#A8DADC" }} // Light blue accent for active state
            thumbColor={isEnabled ? "#E63946" : "#f4f3f4"} // Red accent for the thumb
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
);

// Creating the NotificationPreferences component
const NotificationPreferences = () => {
    // Initialize the router
    const router = useRouter();

    // State for notification toggles
    const [pushAlerts, setPushAlerts] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(false);
    const [securityAlerts, setSecurityAlerts] = useState(true);
    const [promotionalContent, setPromotionalContent] = useState(false);

    // State for loading
    const [isLoading, setIsLoading] = useState(false);

    // Exponential backoff retry logic (simulated for front-end)
    const MAX_RETRIES = 3;

    // Function to handle saving preferences
    const handleSavePreferences = async () => {
        setIsLoading(true);

        const userToken = await SecureStore.getItemAsync("userToken");
        // Defining the server url (replace with your actual endpoint)
        const serverUrl = `${process.env.serverUrl}/dashboard/update-notifications`;

        const preferencesData = {
            pushAlerts,
            emailUpdates,
            securityAlerts,
            promotionalContent
        };

        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
            try {
                // Simulate network delay
                await new Promise(resolve => setTimeout(resolve, 500));

                // Actual fetch call (Replace the dummy URL with your real backend)
                const response = await fetch(serverUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "userToken": userToken,
                    },
                    body: JSON.stringify(preferencesData),
                });

                // Simulate success for demonstration
                const success = Math.random() > 0.1; // 90% chance of success

                if (response.ok && success) {
                    Alert.alert(
                        "Success",
                        "Your notification preferences have been saved.",
                        [
                            {
                                text: "OK",
                                onPress: () => {
                                    // Optionally navigate back after success
                                    // router.back(); 
                                }
                            }
                        ]
                    );
                    break; // Exit loop on success
                } else {
                    const errorMsg = "Failed to save preferences. Please try again.";
                    console.error("Notification API Error:", errorMsg);

                    if (attempt === MAX_RETRIES - 1) {
                         Alert.alert("Failed", errorMsg);
                    }
                }
            } catch (networkError) {
                console.log(`Attempt ${attempt + 1} failed:`, networkError.message);
                if (attempt === MAX_RETRIES - 1) {
                    Alert.alert("Network Error", "Could not connect to the server after multiple attempts.");
                } else {
                    // Exponential backoff delay
                    const delay = Math.pow(2, attempt) * 1000;
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }

        setIsLoading(false);
    };

    // Rendering the JSX
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                {/* Back button using router.back() */}
                <Pressable onPress={() => router.replace("/profile")} style={styles.backButton}>
                    <Ionicons name="chevron-back-outline" size={30} color="#F1FAEE" />
                </Pressable>
                <Text style={styles.appTitle}>Notification Preferences</Text>
                <Text style={styles.systemStatus}>ACCOUNT MANAGEMENT</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* 1. Push Notifications Section */}
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>In-App & Push Alerts</Text>
                </View>

                <View style={styles.card}>
                    <PreferenceRow
                        label="Receive Push Alerts"
                        description="Get instant notifications for critical system events."
                        isEnabled={pushAlerts}
                        toggleSwitch={() => setPushAlerts(previousState => !previousState)}
                    />
                </View>

                {/* 2. Email Notifications Section */}
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Email Communication</Text>
                </View>

                <View style={styles.card}>
                    <PreferenceRow
                        label="Daily/Weekly Updates"
                        description="Receive summary reports and scheduled operational updates."
                        isEnabled={emailUpdates}
                        toggleSwitch={() => setEmailUpdates(previousState => !previousState)}
                    />
                    <PreferenceRow
                        label="Security Alerts"
                        description="Crucial alerts regarding your account security (Highly Recommended)."
                        isEnabled={securityAlerts}
                        toggleSwitch={() => setSecurityAlerts(previousState => !previousState)}
                    />
                    <PreferenceRow
                        label="Promotional Content"
                        description="Information about new features and services."
                        isEnabled={promotionalContent}
                        toggleSwitch={() => setPromotionalContent(previousState => !previousState)}
                    />
                </View>


                {/* Save Button */}
                <Pressable
                    style={({ pressed }) => [
                        styles.saveButton,
                        isLoading ? styles.disabledButton : null,
                        pressed && !isLoading ? styles.pressedButton : null,
                    ]}
                    onPress={handleSavePreferences}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#F1FAEE" />
                    ) : (
                        <Text style={styles.buttonText}>Save Preferences</Text>
                    )}
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the component
export default NotificationPreferences;