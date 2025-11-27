import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import background from "../assets/images/satcom.jpg"; 
import { Dimensions, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';

// Setting the width 
const { width } = Dimensions.get('window');

// --- System Step Data ---
const systemSteps = [
  {
    key: 'dataAcquisition',
    title: '1. Drone Data Acquisition',
    description: 'The system reads real-time video or still image data captured by a high-resolution surveillance drone patrolling the target area.',
    icon: '🚁', // Emoji representing a drone
  },
  {
    key: 'mlProcessing',
    title: '2. Machine Learning Analysis',
    description: 'A powerful machine learning model analyzes the drone feed, running real-time image recognition algorithms to detect and classify potential bandit presence.',
    icon: '🧠', // Emoji representing ML/processing
  },
  {
    key: 'notificationDispatch',
    title: '3. Alert & Push Notification',
    description: 'If a bandit is identified, an alert is sent instantly to the central server, which then triggers a high-priority push notification to this mobile application.',
    icon: '🚨', // Emoji representing an alert
  },
];

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

export default index;

// ---
// ## 🖼️ Styling and Transitions (Updated for Dark Theme)
// ---

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
    footer: {
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#2C3E50',
        backgroundColor: '#1C2833',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#A8DADC',
    }, 
  header: {
    padding: 20,
    alignItems: 'center',
    // 2. HEADER BORDERS: Updated colors for contrast on black background
    borderBottomWidth: 1,
    borderBottomColor: '#2C3E50', // Dark border for subtle separation
    backgroundColor: '#1C2833', // Very dark grey for header background
  },
  appTitle: {
    fontSize: 30,
    fontWeight: '900',
    color: '#F1FAEE', // White/Off-White text (good contrast)
  },
  systemStatus: {
    fontSize: 14,
    color: '#A8DADC', // Light blue accent text
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 25, 
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  card: {
    width: width * 0.9,
    minHeight: 200,
    // 3. CARD BACKGROUND: Changed from 'white' to a dark grey
    backgroundColor: '#1E1E1E', 
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#ffffff', // White shadow (subtle effect on dark theme)
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  cardIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    // 4. CARD TITLE TEXT: Changed to white/light color
    color: '#F1FAEE', 
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 16,
    // 5. CARD DESCRIPTION TEXT: Changed to a lighter color
    color: '#BDC3C7', 
    textAlign: 'center',
    lineHeight: 24,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  dots: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  arrow: {
    fontSize: 24,
    fontWeight: 'bold',
    // 6. PAGINATION ARROWS: Changed to white/light color
    color: '#1D3557', 
    paddingHorizontal: 10,
  },
  navContainer: {
    padding: 20,
    // 7. NAVIGATION BORDER: Updated color for contrast
    borderTopWidth: 1,
    borderTopColor: '#2C3E50',
  },
  navButton: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});