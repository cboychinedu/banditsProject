// Importing the necessary modules 
import { Tabs  } from "expo-router"; // Added useRouter
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors"; 
import { Ionicons } from "@expo/vector-icons";
import LogoutButton from "../../components/logout";

// Creating the layout 
const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    
    // We use the same color for the header text/icons as the active tab icon color
    const activeIconColor = "#1D3557"; 

    return (
        <Tabs 
            screenOptions={{
                // Ensure headers are shown for screens that need the Logout button
                // headerShown: true, 
                
                // Header style for screens managed by this layout
                headerStyle: {
                    backgroundColor: theme.secondaryButton, // Use a theme color for contrast
                },
                // Set the header tint color (for back button/icons)
                headerTintColor: activeIconColor,

                // FIX: Corrected typo from 'secodaryButton' to 'secondaryButton'
                // This property is for the small notification badge, not the bar itself.
                tabBarBadgeStyle: {
                    backgroundColor: theme.secondaryButton, 
                }, 
                tabBarStyle: {
                    backgroundColor: "#e6e5e5ff", 
                    paddingTop: 10, 
                    height: 70,
                }, 
                // Using specific colors for the icons/labels
                tabBarActiveTintColor: activeIconColor, 
                tabBarInactiveTintColor: "#667486ff",
                tabBarLabelStyle: {
                    marginBottom: 5,
                }
            }}
        >
            {/* PROFILE TAB (Where the Logout button will appear) */}
            <Tabs.Screen 
                name="dashboard"
                options={{ 
                    title: "Dashboard", 
                    tabBarIcon: ({focused}) => (
                        <Ionicons
                            size={24}
                            name={focused ? "accessibility" : "accessibility-outline"} // Changed to have an outline for inactive
                            color={focused ? activeIconColor : "#667486ff" }
                        />
                    ),
                    headerTitle: "System Dashboard" 
                }}
            /> 
            <Tabs.Screen 
                name="profile"
                options={{ 
                    title: "Profile", 
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={ focused ? "person" : "person-outline" }
                            color={ focused ? activeIconColor : "#667486ff" }
                        /> 
                    ),
                    // Add the Logout button to the header
                    headerRight: () => <LogoutButton tintColor={activeIconColor} />,
                    headerTitle: "User Profile",
                }}
            /> 
            {/* Setting tabBarButton: () => null ensures this screen is registered for navigation but does not appear in the tab bar. */}
            <Tabs.Screen
                name="changePassword" // Assumes file is named (dashboard)/change-password.jsx
                options={{
                    title: "Change Password",
                    headerTitle: "Change Password",
                    href: null, 
                }}
            />

        </Tabs> 
    )
}

// Exporting the dashboard layout 
export default DashboardLayout;