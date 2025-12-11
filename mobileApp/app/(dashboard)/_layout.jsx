// Importing the necessary modules 
import { Tabs } from "expo-router"; 
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors"; 
import { Ionicons } from "@expo/vector-icons";
import LogoutButton from "../../components/logout";

// Creating the layout 
const DashboardLayout = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    
    const activeIconColor = "#1D3557"; 

    return (
        <Tabs 
            screenOptions={{
                
                headerStyle: {
                    backgroundColor: theme.secondaryButton, 
                },
                headerTintColor: activeIconColor,

                tabBarBadgeStyle: {
                    backgroundColor: theme.secondaryButton, 
                }, 
                // --- CORRECTED/IMPROVED TAB BAR STYLES ---
                tabBarStyle: {
                    backgroundColor: "#e6e5e5ff", 
                    paddingTop: 10, 
                    // Removed fixed height and marginBottom
                }, 
                // SOLUTION: Use safeAreaInsets to prevent overlap on Android
                safeAreaInsets: { 
                    bottom: 0, 
                },
                // --- END CORRECTION ---

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
                            name={focused ? "accessibility" : "accessibility-outline"} 
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
                    headerRight: () => <LogoutButton tintColor={activeIconColor} />,
                    headerTitle: "User Profile",
                }}
            /> 
            <Tabs.Screen
                name="history"
                options={{
                    title: "History",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={ focused ? "time" : "time-outline" }
                            color={ focused ? activeIconColor : "#667486ff" }
                        />
                    ),
                    headerTitle: "History Analysis",
                }}
            />
            {/* Hidden screens (href: null) */}
            <Tabs.Screen
                name="changePassword" 
                options={{
                    title: "Change Password",
                    headerTitle: "Change Password",
                    href: null, 
                }}
            />
            <Tabs.Screen
                name="notificationPreferences" 
                options={{
                    title: "Notifications",
                    headerTitle: "Notification Preferences",
                    href: null, 
                }}
            /> 
            <Tabs.Screen
                name="[videoFeed]"
                options={{
                    title: "Video Feed",
                    headerTitle: "Live Video Feed",
                    href: null, 
                }}
            />

        </Tabs> 
    )
}

// Exporting the dashboard layout 
export default DashboardLayout;