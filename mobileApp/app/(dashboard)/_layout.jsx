// Importing the necessary modules 
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors"; 

// Creating the layout 
const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
    return (
        <Tabs 
            screenOptions={{
                headerShown: false, 
                tabBarBadgeStyle: {
                    backgroundColor: theme.secodaryButton, 
                    paddingTop: 10, 
                    height: 90
                }, 
                tabBarActiveTintColor: theme.tabIconDefault, 
                tabBarInactiveTintColor: theme.tabIconDefault
            }}
        /> 
    )
}

// Exporting the dashbaord layout 
export default DashboardLayout; 