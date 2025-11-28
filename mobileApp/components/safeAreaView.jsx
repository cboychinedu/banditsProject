// Importing the necssary modules 
import { View, SafeAreaView } from "react-native";

const SafeArea = ({...props}) => {
    return(
        <SafeAreaView
        {...props}
        style={{ padding: 20 }}
        />
    )
}

// Exporting the component 
export default SafeArea; 