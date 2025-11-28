// Importing the necessary modules 
import styles from '../styles/indexStyle';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import systemSteps from '../components/systemSteps';
import background from "../assets/images/satcom.jpg"; 
import { 
  ImageBackground, 
  Pressable, 
  SafeAreaView, 
  Text, 
  View, 
  ScrollView 
} from 'react-native';

// Creating the index component 
const index = ({ navigation }) => {
  // Iniitialize the router hook 
  const router = useRouter(); 

  // Setting the state 
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = systemSteps[currentStepIndex];

  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % systemSteps.length);
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex - 1 + systemSteps.length) % systemSteps.length);
  };

  // Creating a function for navigating the user to the login page 
  const navigateToLogin = () => {
    // Navigate the user to the login page
    router.push('/login'); 
  };

  // Creating a function for navigating the user to the register page 
  const navigateToRegister = () => {
    // Navigate the user to the register page 
    router.push('/register'); 
  }

  // Creating a function to navigate to the about page 
  const navigateToAbout = () => {
    router.push('/about'); 
  }

  // Step card component 
  const StepCard = ({ step }) => (
    <View style={styles.card}>
      <Text style={styles.cardIcon}>{step.icon}</Text>
      <Text style={styles.cardTitle}>{step.title}</Text>
      <Text style={styles.cardDescription}>{step.description}</Text>
    </View>
  );

  return (
    <ImageBackground 
      source={background}
      resizeMethod='cover'
      style={styles.imageBackground}
    > 

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>Bandit Detection </Text>
          <Text style={styles.systemStatus}>A.I. Surveillance System</Text>
        </View>

        <ScrollView> 
            <View style={styles.stepContainer}>
            {/* The main content area where the steps transition */}
            <StepCard step={currentStep} />
            
            {/* Navigation Dots/Buttons for the steps */}
            <View style={styles.pagination}>
                <Pressable onPress={goToPreviousStep} disabled={systemSteps.length === 1}>
                <Text style={styles.arrow}>{`<`}</Text>
                </Pressable>
                
                <View style={styles.dots}>
                {systemSteps.map((_, index) => (
                    <View
                    key={index}
                    style={[
                        styles.dot,
                        { backgroundColor: index === currentStepIndex ? '#E63946' : '#A8DADC' }, // Highlight current step
                    ]}
                    />
                ))}
                </View>
                
                <Pressable onPress={goToNextStep} disabled={systemSteps.length === 1}>
                <Text style={styles.arrow}>{`>`}</Text>
                </Pressable>
            </View>
            </View>
            
            {/* --- App Transitions/Navigation Buttons --- */}
            <View style={styles.navContainer}>
                <Pressable
                style={[styles.navButton, { backgroundColor: "#A8DADC" }]}
                onPress={navigateToAbout}
                >
                <Text style={[styles.buttonText, {color: '#1D3557'}]}> About System </Text>
            </Pressable>

            <Pressable 
                style={[styles.navButton, { backgroundColor: '#1D3557' }]}
                onPress={navigateToLogin}
            >
                <Text style={styles.buttonText}>System Login</Text>
            </Pressable>

            {/* Adding the register logic */}
            <Pressable
                style={[styles.navButton, { backgroundColor: "#1d2b6a" }]}
                onPress={navigateToRegister}
                >
                <Text style={styles.buttonText}> Register Here </Text>
            </Pressable>
            </View>
       </ScrollView>


        {/* Footer/Version Info */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>Bandit Detection App v1.0.0</Text>
        </View>
      </SafeAreaView> 
    </ImageBackground>
  );
};

// Exporting the index component 
export default index;