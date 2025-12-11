// Importing the necessary modules
import * as SecureStore from "expo-secure-store";
import { useState } from 'react';
import { useRouter } from 'expo-router'; 
import {
    ScrollView,
    View,
    Text,
    SafeAreaView,
    Pressable,
    TextInput,
    Button,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/changePasswordStyle";

// Creating the ChangePassword component
const ChangePassword = () => {
    // Initialize the router
    const router = useRouter(); 
    
    // State for form inputs
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // State for loading and error messages
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    // Remove error 
    const removeError = () => {
        // Setting the error as null to remove the message 
        setError(null); 
        setSuccess(null);
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
                // Checking the response data 
                if (data.status === "success") {
                    // Setting the success message 
                    setSuccess(data.message);
                    setNewPassword("");
                    setConfirmPassword("");

                    // Delaying the navigation back to profile page
                    setTimeout(() => {
                        router.replace('/profile');
                    }, 4000);
                }

                // Else if there is an error 
                else if (data.status === "error") { 
                    // Setting the error message 
                    setError(data.message);
                }
                
                // Else handling unexpected responses
                else {
                    // Setting a generic error message
                    setError("An unexpected error occurred. Please try again later.");
                }
            })

        }

    }

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

                {/* Success Display */}
                {success && (
                    <View style={styles.successContainer}>
                        <Ionicons name="checkmark-circle-outline" size={20} color="#F1FAEE" />
                        <Text style={styles.successText}>{success}</Text>
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
                        onFocus={removeError}
                        onChangeText={setNewPassword}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Confirm New Password"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onFocus={removeError}
                        onChangeText={setConfirmPassword}
                    />
                </View>

                {/* Change Password Button */}
                <Pressable
                    style={styles.changePasswordButton}
                    onPress={handleChangePassword}
                > 
                    <Text style={styles.buttonText}> Update Password </Text> 
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the component
export default ChangePassword;