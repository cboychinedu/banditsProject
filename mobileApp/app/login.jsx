// Importing the necessary modules 
import { useState } from 'react';
import { useRouter } from 'expo-router';
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
import * as SecureStore from "expo-secure-store"; 
import styles from '../styles/loginStyle';
import background from "../assets/images/image.jpg";

// Creating the login screen component 
const LoginScreen = () => {
  // Setting the router object 
  const router = useRouter(); 

  // Setting the state 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Declare the handler as 'async' so you can use 'await'
  const handleLogin = async () => { 
    // Checking if the fields are empty 
    if (email.trim() === "") {
        Alert.alert("Error", "Email address is missing!"); 
        return; 
    }

    if (password === "") {
        Alert.alert("Error", "Password is missing!");
        return; 
    }

    // if the whole form was filled, execute the block 
    else {
      // Create a json object to have all the user login creds 
      const userData = JSON.stringify({
        email: email,
        password: password
      }); 

      // Defining the server url 
      const serverUrl = `${process.env.serverUrl}/login`; 

      // Using try catch error to handle the server connections 
      try {
        // Use async/await for cleaner Promise handling 
        const response = await fetch(serverUrl, {
          method: "POST",
          credentials: true, 
          headers: {
            "Content-Type": "application/json"
          }, 
          body: userData
        });

        const responseData = await response.json();
        
        // Handle the successful login response 
        if (responseData.status === "success") {
          
          Alert.alert("Success!", "Welcome back!"); 

          // Use await with SecureStore
          await SecureStore.setItemAsync("userToken", responseData.token);

          // Navigate the user to the dashboard page 
          // Assuming the path is correct: /(dashboard)
          router.replace("/dashboard"); 
        }

        // else
        else {
          // Show the dialog box 
          Alert.alert("Login Failed", responseData.message || "Invalid credentials.");
        }
      }

      // Catch the error 
      catch (error) {
        // Display the error message 
        console.error("Login Error:", error);
        Alert.alert("Network Error", "Could not connect to the server. Check your connection.");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={styles.container}>
        <ImageBackground 
          source={background} 
          resizeMode="cover" 
          style={styles.imageBackground}
        >
          <View style={styles.overlay}> 
            <Text style={styles.title}>Bandit Detection</Text>
            <Text style={styles.subtitle}>System Login</Text>

            {/* Username/Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#ddd"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Password Input */}
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ddd"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true} 
            />

            {/* Login Button */}
            <Pressable 
              style={styles.button}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            {/* Link to other pages (optional, e.g., Forgot Password) */}
            <Pressable onPress={() => router.push('/register/register')}>
              <Text style={styles.forgotPassword}>Don't have an account? Register Here</Text>
            </Pressable>

          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Exporting the login page 
export default LoginScreen;