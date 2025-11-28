// Importing the necessary modules 
import React from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Dimensions,
    Pressable,
    Image, // Used for the profile avatar
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
// Assuming a general placeholder for the avatar
const userAvatarPlaceholder = 'https://placehold.co/100x100/A8DADC/1D3557?text=USER';

// Setting the width for responsive styling
const { width } = Dimensions.get('window');

// --- Placeholder Data (Replace with actual user context) ---
const USER_PROFILE = {
    username: 'Agent_Alpha_1',
    email: 'alpha.user@bandit-det.com',
    status: 'Active',
    joinedDate: '2024-03-15',
    role: 'Surveillance Operator',
};

// --- Sub-Components ---

// Card component used for displaying information fields
const InfoCard = ({ icon, label, value }) => (
    <View style={profileStyles.infoRow}>
        <Ionicons name={icon} size={20} color="#A8DADC" style={profileStyles.infoIcon} />
        <View style={profileStyles.infoTextView}>
            <Text style={profileStyles.infoLabel}>{label}</Text>
            <Text style={profileStyles.infoValue}>{value}</Text>
        </View>
    </View>
);

// Creating the Profile component 
const Profile = () => {
    
    // Rendering the jsx 
    return(
        // Use SafeAreaView with the container styles
        <SafeAreaView style={profileStyles.safeArea}> 
            <View style={profileStyles.header}>
                <Text style={profileStyles.appTitle}>User Profile</Text>
                <Text style={profileStyles.systemStatus}>ACCOUNT MANAGEMENT</Text>
            </View>

            <ScrollView contentContainerStyle={profileStyles.scrollContent}> 
                
                {/* 1. Profile Summary Card */}
                <View style={profileStyles.profileCard}>
                    <Image
                        source={{ uri: userAvatarPlaceholder }} 
                        style={profileStyles.avatar}
                        resizeMode="cover"
                    />
                    <Text style={profileStyles.profileUsername}>{USER_PROFILE.username}</Text>
                    <Text style={profileStyles.profileRole}>{USER_PROFILE.role}</Text>
                </View>

                {/* 2. Account Details Section */}
                <View style={profileStyles.sectionTitleContainer}>
                    <Text style={profileStyles.sectionTitle}>Account Details</Text>
                </View>
                
                <View style={profileStyles.detailsCard}>
                    <InfoCard 
                        icon="mail-outline"
                        label="Email Address"
                        value={USER_PROFILE.email}
                    />
                    <InfoCard 
                        icon="calendar-outline"
                        label="Joined Date"
                        value={USER_PROFILE.joinedDate}
                    />
                    <InfoCard 
                        icon="alert-circle-outline"
                        label="Account Status"
                        value={USER_PROFILE.status}
                    />
                </View>
                
                {/* 3. Settings Placeholder */}
                 <View style={profileStyles.sectionTitleContainer}>
                    <Text style={profileStyles.sectionTitle}>System Settings</Text>
                </View>
                
                <Pressable style={profileStyles.settingsButton}>
                    <Ionicons name="lock-closed-outline" size={24} color="#F1FAEE" />
                    <Text style={profileStyles.settingsText}>Change Password</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#667486ff" />
                </Pressable>
                
                <Pressable style={profileStyles.settingsButton}>
                    <Ionicons name="settings-outline" size={24} color="#F1FAEE" />
                    <Text style={profileStyles.settingsText}>Notification Preferences</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#667486ff" />
                </Pressable>
                
            </ScrollView>
        </SafeAreaView>
    )
}

// Exporting the profile page 
export default Profile;

// --- STYLING (Copied and adapted from Dashboard for consistency) ---

const profileStyles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        backgroundColor: '#1E1E1E', // Dark background for the entire screen
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        backgroundColor: '#1C2833', 
    },
    appTitle: {
        fontSize: 30,
        fontWeight: '900',
        color: '#F1FAEE', // White/Off-White text
    },
    systemStatus: {
        fontSize: 14,
        color: '#A8DADC', // Light blue accent text
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    // --- Profile Summary Card ---
    profileCard: {
        width: width * 0.9,
        backgroundColor: '#1C2833', 
        borderRadius: 15,
        padding: 30,
        marginBottom: 20,
        alignItems: 'center',
        elevation: 8,
        borderWidth: 1,
        borderColor: '#A8DADC', // Highlight border
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50, // Circular image
        marginBottom: 15,
        borderWidth: 3,
        borderColor: '#E63946', // Red accent border
    },
    profileUsername: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#F1FAEE',
        marginBottom: 5,
    },
    profileRole: {
        fontSize: 16,
        color: '#A8DADC',
    },
    // --- Account Details Card ---
    sectionTitleContainer: {
        width: width * 0.9,
        paddingVertical: 10,
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F1FAEE',
        paddingLeft: 5,
    },
    detailsCard: {
        width: width * 0.9,
        backgroundColor: '#2C3E50', // Slightly lighter dark background
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        elevation: 4,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#34495E', // Lighter divider
    },
    infoIcon: {
        marginRight: 15,
    },
    infoTextView: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: '#BDC3C7',
    },
    infoValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#F1FAEE',
    },
    // --- Settings Buttons ---
    settingsButton: {
        flexDirection: 'row',
        width: width * 0.9,
        backgroundColor: '#1C2833',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#2C3E50',
    },
    settingsText: {
        flex: 1,
        fontSize: 16,
        color: '#F1FAEE',
        marginLeft: 15,
    }
});