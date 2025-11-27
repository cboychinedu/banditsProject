import { StyleSheet, useColorScheme } from 'react-native'
import { Stack } from 'expo-router'

const RootLayout = () => {
    // This colorScheme hook is not directly used in the fixed code below, 
    // but it's kept as it was in your original component.
    const colorScheme = useColorScheme(); 

    
  return (
    <Stack 
      screenOptions={{
        // Set the background color of the header bar to black
        headerStyle: {
            backgroundColor: '#000000', 
        },
        headerTintColor: '#ffffff', 
        headerTitleStyle: {
            color: '#ffffff',
        }, 
        animation: "none"
    }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} /> 
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="login" options={{ title: "Login" }} /> 
        <Stack.Screen name="register" options={{ title: "Register" }} /> 

        {/* Dashboard Section */}
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} /> 
    </Stack> 
  )
}

export default RootLayout

const styles = StyleSheet.create({})