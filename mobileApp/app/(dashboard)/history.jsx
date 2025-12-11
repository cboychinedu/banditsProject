// Importing the necessary modules 
import styles from "../../styles/historyStyles"; 
import { useRouter } from "expo-router";
import { 
 Pressable, 
 ScrollView, 
 View, 
 Text, 
 SafeAreaView, 
 Image 
} from 'react-native';

// Creating the history component 
const History = () => {
    // Setting the router 
    const router = useRouter();

    // Rendering the jsx component 
    return(
        // Use SafeArea view with the container 
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}> 
                <Text style={styles.appTitle}> History </Text>
                <Text style={styles.systemStatus}> View your history analysis </Text>
            </View>
        </SafeAreaView>
    )
}

// Exporting the history component 
export default History;