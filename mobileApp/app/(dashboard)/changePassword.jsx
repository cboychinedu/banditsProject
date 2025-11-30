// Importing the necessary modules
import * as SecureStore from "expo-secure-store";
import React, { useState } from 'react';
import { useRouter } from 'expo-router'; // <-- Import useRouter
import {
    ScrollView,
    View,
    Text,
    Alert,
    SafeAreaView,
    Pressable,
    TextInput,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/changePasswordStyle";

// Creating the ChangePassword component
const ChangePassword = () => {
    // Initialize the router
    const router = useRouter(); 
    
    // State for form inputs
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // State for loading and error messages
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Remove error 
    const removeError = () => {
        // Setting the error as null to remove the message 
        setError(null); 
    }

    // Creating a function to handle the password change 
    const handleChangePassword = async () => {
        // Setting the error as null to clear any previous errors 
        setError(null); 

        // Validating the new Password 
        if (newPassword === "") {
            setError("New password cannot be empty.");
            return;
        }

        // Else if the confirm password is empty
        else if (confirmPassword === "") {
            setError("Please confirm your new password.");
            return;
        }

        // Else if the new password and confirm password do not match
        else if (newPassword !== confirmPassword) {
            setError("New password and confirm password do not match.");
            return;
        }

        // Else if all the fields are valide 
        else {
            // Getting the user token from secure storage 
            const userToken = await SecureStore.getItemAsync("userToken");

            // Getting the user new password 
            const userData = JSON.stringify({
                "newPassword": newPassword,
            });
            
            // Defining the server url (replace with your actual endpoint)
            const serverUrl = `${process.env.serverUrl}/dashboard/changePassword`;

            // Making the fetch call to the server 
            fetch(serverUrl, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                    "userToken": userToken,
                }, 
                body: userData,
            })
            // Handling the response from the server
            .then((response) => response.json())
            .then((data)=> {
                console.log(data); 
            })

        }

    }


    //     for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    //         try {
    //             // Simulate network delay and fetch call
    //             await new Promise(resolve => setTimeout(resolve, 500)); 
                
    //             // Actual fetch call (Replace the dummy URL with your real backend)
    //             const response = await fetch(serverUrl, {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "userToken": userToken,
    //                 },
    //                 body: JSON.stringify({
    //                     currentPassword,
    //                     newPassword,
    //                 }),
    //             });

    //             // Simulate success for demonstration
    //             const success = Math.random() > 0.2; // 80% chance of success

    //             if (response.ok && success) {
    //                 // Success response
    //                 Alert.alert(
    //                     "Success", 
    //                     "Your password has been changed successfully.",
    //                     [
    //                         { 
    //                             text: "OK", 
    //                             onPress: () => {
    //                                 // Navigate back after success
    //                                 router.back(); // <-- Use router.back() here
    //                             } 
    //                         }
    //                     ]
    //                 );
                    
    //                 // Clear fields on success
    //                 setCurrentPassword("");
    //                 setNewPassword("");
    //                 setConfirmPassword("");
    //                 break; // Exit loop on success
    //             } else {
    //                 // Simulate API error response
    //                 const errorMsg = "The current password provided is incorrect or the server encountered an error.";
    //                 console.error("Change Password API Error:", errorMsg);
                    
    //                 if (attempt === MAX_RETRIES - 1) {
    //                      Alert.alert("Failed", errorMsg);
    //                 }
    //             }
    //         } catch (networkError) {
    //             console.log(`Attempt ${attempt + 1} failed:`, networkError.message);
    //             if (attempt === MAX_RETRIES - 1) {
    //                 Alert.alert("Network Error", "Could not connect to the server after multiple attempts.");
    //             } else {
    //                 // Exponential backoff delay
    //                 const delay = Math.pow(2, attempt) * 1000;
    //                 await new Promise(resolve => setTimeout(resolve, delay));
    //             }
    //         }
    //     }
        
    //     setIsLoading(false);
    // };

    // Determine if the button should be disabled
    const isFormIncomplete = !currentPassword || !newPassword || !confirmPassword;

    // Rendering the JSX
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                {/* Use router.back() for the back button */}
                <Pressable onPress={() => router.replace('/profile')} style={styles.backButton}> 
                    <Ionicons name="chevron-back-outline" size={30} color="#F1FAEE" />
                </Pressable>
                <Text style={styles.appTitle}>Change Password</Text>
                <Text style={styles.systemStatus}>SECURITY MANAGEMENT</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Info Text */}
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        To update your password, please enter your current password followed by your new password.
                    </Text>
                </View>

                {/* Error Display */}
                {error && (
                    <View style={styles.errorContainer}>
                        <Ionicons name="warning-outline" size={20} color="#F1FAEE" />
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                )}

                {/* Form Inputs */}
                <View style={styles.formCard}>
                    <TextInput
                        style={[styles.input, styles.middleInput]}
                        placeholder="New Password (min. 6 characters)"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={newPassword}
                        onChangeText={setNewPassword}
                        editable={!isLoading}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirm New Password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        editable={!isLoading}
                    />
                </View>

                {/* Change Password Button */}
                <Pressable
                    style={({ pressed }) => [
                        styles.changePasswordButton,
                        isFormIncomplete || isLoading ? styles.disabledButton : null,
                        pressed && !isFormIncomplete && !isLoading ? styles.pressedButton : null,
                    ]}
                    onPress={handleChangePassword}
                    disabled={isFormIncomplete || isLoading}
                >
                    {isLoading ? (
                        <ActivityIndicator size="small" color="#F1FAEE" />
                    ) : (
                        <Text style={styles.buttonText}>Update Password</Text>
                    )}
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the component
export default ChangePassword;