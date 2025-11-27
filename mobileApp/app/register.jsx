// Importing the necessary modules 
import React, { useState } from "react";
import { 
    Alert, 
    ImageBackground, 
    Pressable, 
    Text, 
    TextInput, 
    View
} from 'react-native'; 
import styles from "../styles/registerStyle";
import background from "../assets/images/satcom.jpg"; 

// Creating the register page 
const Register = () => {
    // Setting the state 
    const [fullname, setFullname] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // Creating a function to handle the register attempt 
    const handleRegister = () => {
        // 
        console.log("Register Button Clicked!")
    }

    // Rendering the component 
    return(
        <View style={styles.container}> 
            {/* Setting the image background */}
            <ImageBackground 
                source={background}
                resizeMode="cover"
                style={styles.imageBackground}
                
            >
            {/* Adding the view */}
            <View style={styles.overlay}> 
                <Text style={styles.title}> Register Page </Text>
                <Text style={styles.subtitle}> Register Here! </Text>

                {/* Adding the fullname form */}
                <TextInput 
                    style={styles.input}
                    placeholder="Enter fullname here!" 
                    placeholderTextColor="#ddd"
                    onChangeText={setFullname}
                    value={fullname}
                    keyboardType="text"
                    autoCapitalize="none" 
                /> 

                {/* Email input */}
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your email here!"
                    placeholderTextColor="#ddd"
                    onChangeText={setEmail}
                    value={email}
                /> 

                {/* Password Input  */}
                <TextInput 
                    style={styles.input}
                    placeholder="Enter your password here!"
                    placeholderTextColor="#ddd"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                /> 

                {/* Password confirmation */}
                <TextInput 
                    style={styles.input}
                    placeholder="Confirm your password!"
                    placeholderTextColor="#ddd"
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                    secureTextEntry={true}
                /> 

                {/* Register Button */}
                <Pressable 
                    style={styles.button}
                    onPress={handleRegister}
                >
                    <Text style={styles.buttonText}> Register Here </Text>
                </Pressable>

            </View>

            
            </ImageBackground>
        </View>
    )
}

// Exporting the register component 
export default Register; 