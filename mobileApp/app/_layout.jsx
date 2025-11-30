// Importing the necessary modules  
import { Stack } from 'expo-router';
import Auth from "../hooks/useAuth"; 

const RootLayout = () => {
  // This colorScheme hook is not directly used in the fixed code below, 
  // but it's kept as it was in your original component. 
  const { token } = Auth();

  // Rendering the jsx component 
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

      {token && (
        <Stack.Screen 
          name="(dashboard)" 
          options={{ 
            headerShown: false, 
            redirect: false, 
          }} 
        /> 
      )}


      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false, headerLeft: () => null }} /> 
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="login" options={{ title: "Login" }} /> 
      <Stack.Screen name="register" options={{ title: "Register" }} /> 
    </Stack> 
  )
}

// Exporting the root layout 
export default RootLayout