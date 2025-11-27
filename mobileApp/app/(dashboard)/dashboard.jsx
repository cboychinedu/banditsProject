// Importing the necessary modules 
import { Pressable, ScrollView, View, Text } from "react-native";

// Creating the Dashboard component 
const Dashboard = () => {
    // Rendering the jsx 
    return(
        <ScrollView> 
            <View> 
                <Text> Dashboard Component </Text>
            </View>
            <View> 
                <Pressable> 
                    <Text> Check Video Frames </Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

// Exporting the dashbaord page 
export default Dashboard; 