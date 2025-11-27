// Importing the necessary modules 
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import styles from '../styles/loginStyle';
import background from "../assets/images/image.jpg";

// Using the convention 'LoginScreen' for a page/screen component
const LoginScreen = () => {
  // Setting the state 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the login attempt
  const handleLogin = () => {
    // Basic validation and feedback (In a real app, you would call an API here)
    if (username === '' || password === '') {
      Alert.alert("Login Error", "Please enter both username/email and password.");
      return;
    }

    // Placeholder for actual login logic (e.g., API call)
    console.log("Attempting login with:", { username, password });
    Alert.alert("Login Attempt", `Credentials: ${username} / ${password}\n(Actual login logic would go here)`);

    // In a real application, successful login would navigate the user:
    // router.replace('/dashboard'); 
  };

  return (
    <View style={styles.container}>
      {/* Using ImageBackground with the imported image. 
        You might consider removing this or using a solid color/gradient 
        for a more focused login screen. 
      */}
      <ImageBackground 
        source={background} // Using the renamed import
        resizeMode="cover" 
        style={styles.imageBackground}
      >
        <View style={styles.overlay}> 
          <Text style={styles.title}>Bandit Detection</Text>
          <Text style={styles.subtitle}>System Login</Text>

          {/* Username/Email Input */}
          <TextInput
            style={styles.input}
            placeholder="Username or Email"
            placeholderTextColor="#ddd"
            onChangeText={setUsername}
            value={username}
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
            secureTextEntry={true} // Important for passwords
          />

          {/* Login Button */}
          <Pressable 
            style={styles.button}
            onPress={handleLogin} // Attach the login handler
          >
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>

          {/* Link to other pages (optional, e.g., Forgot Password) */}
          {/* Note: expo-router Link is removed as it's not essential for a basic login form */}
          <Pressable onPress={() => Alert.alert("Feature", "Forgot Password Pressed")}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </Pressable>

        </View>
      </ImageBackground>
    </View>
  );
};

// Exporting the login page 
export default LoginScreen;