// Importing the necessary modules 
import { useRouter } from "expo-router"; 
import { useState } from "react";
import { 
    Alert, 
    ImageBackground, 
    Pressable, 
    Text, 
    TextInput, 
    View, 
    TouchableWithoutFeedback, 
    Keyboard
} from 'react-native'; 
import styles from "../styles/registerStyle";
import background from "../assets/images/satcom.jpg"; 

// Creating the register page 
const Register = () => {
    // Setting the router object 
    const router = useRouter();

    // Setting the state 
    const [fullname, setFullname] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    
    // Creating a function to handle the register attempt 
    const handleRegister = () => {
        // Checking if the fields are empty 
        if (fullname === "") {
            // Displaying an alert dialog box
            Alert.alert("Fullname is missing!"); 
        }

        // Checking for email 
        else if (email === "") {
            // Displaying an alert dialog box 
            Alert.alert("Email address is missing!"); 
        }
        
        // Checking for password 
        else if (password === "") {
            // Displaying an alert dialog box 
            Alert.alert("Password missing!"); 
        }

        // Checking for confirm password 
        else if (confirmPassword === "") {
            // Displaying an alert dialog box 
            Alert.alert("Confirm password missing!"); 
        }

        // Checking the confirm password with the password 
        else if (confirmPassword !== password) {
            // Displaying an alert dialog box 
            Alert.alert("Passwords incorrect!"); 
        }

        // Connect to the database if all fields are correct
        else {
            // Create a json object to have all the user data 
            const userData = JSON.stringify({
                fullname: fullname,
                email: email, 
                password: password, 
            }); 

            // Defining the server url 
            const serverUrl = `${process.env.serverUrl}/register`; 

            // Using try catch error to handle the server connections 
            try {
                // Sending the data to the server 
                fetch(serverUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" }, 
                    body: userData, 
                })
                // Handling the response from the server 
                .then((response) => response.json())
                .then((responseData) => {
                    // Handle the successful register response 
                    if (responseData.status === "success") {
                        // Show a dialog box 
                        Alert.alert("User registered!");

                        // Redirect the user to the login page 
                        router.replace("/login");

                    }

                    // Else if the response was an error 
                    else {
                        // Show a dialog box 
                        Alert.alert(responseData.message);
                    }
                })
                .catch((error) => {
                    // Log the error 
                    console.error(error);

                    // Show the error 
                    Alert.alert(error.message);
                })
                
            }

            // Catch the error if the data was not sent 
            catch (error) {
                // log the error 
                console.log(error);

                // Display the error message 
                Alert.alert(error); 
            }
            
        }
    }

    // Rendering the component 
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
    )
}

// Exporting the register component 
export default Register; 