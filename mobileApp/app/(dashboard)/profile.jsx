// Importing the necessary modules
const profileLogo = require('../../assets/images/profile.png');
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from 'react'; 
import { 
    ScrollView, 
    View, 
    Text, 
    Alert, 
    SafeAreaView,
    Pressable,
    Image, 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import styles from "../../styles/profileStyle";
import { useRouter } from 'expo-router';


// Card component used for displaying information fields
const InfoCard = ({ icon, label, value }) => (
    <View style={styles.infoRow}>
        <Ionicons name={icon} size={20} color="#A8DADC" style={styles.infoIcon} />
        <View style={styles.infoTextView}>
            <Text style={styles.infoLabel}>{label}</Text>
            <Text style={styles.infoValue}>{value}</Text>
        </View>
    </View>
);

// Creating the Profile component 
const Profile = () => {
    // Setting the state for the user profile data 
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("|Active");
    const [joinedDate, setJoinedDate] = useState("");

    // Creating the router instance
    const router = useRouter();

    // Creating a function to fetch the user profile data 
    const fetchUserProfile = async () => {
        // This is where you would fetch the user data from your server or context
        // For now, we are using static data defined above
        console.log("Fetching user profile data...");
        const userToken = await SecureStore.getItemAsync("userToken");

        // Defining the server url 
        const serverUrl = `${process.env.serverUrl}/dashboard/profile`;

        // Using try catch to handle server connections
        try {
            const response = await fetch(serverUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "userToken": userToken,
                }
            }); 

            // Getting the response data 
            let responseData = await response.json();
            
            // Parse the data
            let data = JSON.parse(responseData.data);

            // Setting the user profile data to the state variables 
            setFullname(data.fullname);
            setEmail(data.email);
            setStatus(data.status || "Active");
            setJoinedDate(data.createdAt);

        }

        catch (error) {
            // Display the error message 
            console.log("Profile Fetch Error:", error);
            Alert.alert("Network Error", "Could not connect to the server. Check your connection.");
        }
    };

    // Getting the user data from a context or state management (not shown here)
    useEffect(() => {

        // Calling the fetch profile function on component to load data 
        fetchUserProfile();
    }, []);
    
    // Rendering the jsx 
    return(
        // Use SafeAreaView with the container styles
        <SafeAreaView style={styles.safeArea}> 
            <View style={styles.header}>
                <Text style={styles.appTitle}>User Profile</Text>
                <Text style={styles.systemStatus}>ACCOUNT MANAGEMENT</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}> 
                
                {/* 1. Profile Summary Card */}
                <View style={styles.profileCard}>
                    <Image
                        source={profileLogo} 
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                    <Text style={styles.profileUsername}>{fullname}</Text>
                    <Text style={styles.profileRole}> Surveillance Operator </Text>
                </View>

                {/* 2. Account Details Section */}
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Account Details</Text>
                </View>
                
                <View style={styles.detailsCard}>
                    <InfoCard 
                        icon="mail-outline"
                        label="Email Address"
                        value={email}
                    />
                    <InfoCard 
                        icon="calendar-outline"
                        label="Joined Date"
                        value={joinedDate}
                    />
                    <InfoCard 
                        icon="alert-circle-outline"
                        label="Account Status"
                        value={status}
                    />
                </View>
                
                {/* 3. Settings Placeholder */}
                 <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>System Settings</Text>
                </View>
                
                <Pressable style={styles.settingsButton} onPress={() => router.push('changePassword')}>
                    <Ionicons name="lock-closed-outline" size={24} color="#F1FAEE" />
                    <Text style={styles.settingsText}>Change Password</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#667486ff" />
                </Pressable>
                
                <Pressable style={styles.settingsButton} onPress={() => router.push('notificationPreferences')}>
                    <Ionicons name="settings-outline" size={24} color="#F1FAEE" />
                    <Text style={styles.settingsText}>Notification Preferences</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#667486ff" />
                </Pressable>
                
            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the profile page 
export default Profile;