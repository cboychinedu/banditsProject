// Importing the necessary modules 
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View, 
    ImageBackground, 
    ScrollView, 
    Dimensions,
} from 'react-native';
// Assuming the background image is available here (adjust path if needed)
import background from "../assets/images/satcom.jpg"; 

// Setting the width for responsive styling
const { width } = Dimensions.get('window');

// --- Component Definition ---
const About = () => {
    
  return (
    <ImageBackground 
      source={background}
      resizeMethod='cover'
      style={styles.imageBackground}
    > 
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.appTitle}>About the System</Text>
          <Text style={styles.systemStatus}>A.I. Surveillance System</Text>
        </View>
        
        {/* Scrollable container for the content */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>Our Mission</Text>
                <Text style={styles.cardDescription}>
                    The Bandit Detection System leverages cutting-edge drone surveillance and Artificial Intelligence to provide real-time security and early warning against unauthorized presence in monitored zones. Our mission is to enhance security with automated, scalable, and highly accurate detection capabilities.
                </Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>How It Works</Text>
                <View style={styles.bulletPoint}>
                    <Text style={styles.bulletText}>🚁</Text>
                    <Text style={styles.bulletDescription}>High-resolution drone data acquisition for continuous area monitoring.</Text>
                </View>
                <View style={styles.bulletPoint}>
                    <Text style={styles.bulletText}>🧠</Text>
                    <Text style={styles.bulletDescription}>Machine Learning analysis instantly identifies patterns matching known threats (bandits).</Text>
                </View>
                <View style={styles.bulletPoint}>
                    <Text style={styles.bulletText}>🚨</Text>
                    <Text style={styles.bulletDescription}>Instantaneous alert dispatch and push notification to security personnel upon threat confirmation.</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.cardTitle}>Security & Privacy</Text>
                <Text style={styles.cardDescription}>
                    Data security is paramount. All video feeds and server communications are encrypted using industry-standard protocols. The system is designed for lawful, designated surveillance purposes only.
                </Text>
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

export default About;

// ---
// ## 🖼️ Styling (Reusing Dark Theme from index.jsx)
// ---

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, 
        // Background is handled by ImageBackground
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#2C3E50',
        backgroundColor: '#1C2833', 
    },
    appTitle: {
        fontSize: 30,
        fontWeight: '900',
        color: '#F1FAEE', 
    },
    systemStatus: {
        fontSize: 14,
        color: '#A8DADC', 
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
        paddingBottom: 40, // Ensure space below the last card
    },
    card: {
        width: width * 0.9,
        // Using a dark background for contrast
        backgroundColor: '#1E1E1E', 
        borderRadius: 15,
        padding: 25,
        marginBottom: 20, // Spacing between cards
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#A8DADC', // Light blue accent
        textAlign: 'center',
    },
    cardDescription: {
        fontSize: 16,
        color: '#BDC3C7', // Light grey text
        lineHeight: 24,
        textAlign: 'justify',
    },
    bulletPoint: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginTop: 5,
    },
    bulletText: {
        fontSize: 18,
        marginRight: 10,
        color: '#E63946', // Red accent
        minWidth: 30,
    },
    bulletDescription: {
        fontSize: 16,
        color: '#BDC3C7',
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
    }
});