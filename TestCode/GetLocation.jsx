import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location'; // 👈 Import the Expo Location module

const GeolocationExample = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getDeviceLocation = async () => {
    // 1. Reset state on new request
    setLocation(null);
    setErrorMsg(null);

    // 2. Request foreground permission from the user
    let { status } = await Location.requestForegroundPermissionsAsync();
    
    // Check if permission was granted
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied 🚫');
      Alert.alert('Location Access Denied', 'Please enable location services in your phone settings.');
      return;
    }

    // 3. Get the current location data
    try {
      let locationData = await Location.getCurrentPositionAsync({});
      
      // 4. Update state with coordinates
      setLocation({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
        accuracy: locationData.coords.accuracy,
      });

    } catch (error) {
      console.error('Error fetching location:', error);
      setErrorMsg('Failed to get location. Try again. 😞');
      Alert.alert('Error', 'Could not fetch location data.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geolocation Finder (Expo)</Text>
      
      <Button 
        title="Get Current Location 📍" 
        onPress={getDeviceLocation} 
        color="#1c1584ff"
      />

      {/* Display Location Status */}
      <View style={styles.resultBox}>
        <Text style={styles.label}>Location Status:</Text>
        {errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}
        
        {location ? (
          <>
            <Text style={styles.coordText}>Lat: {location.latitude.toFixed(6)}</Text>
            <Text style={styles.coordText}>Lon: {location.longitude.toFixed(6)}</Text>
            <Text style={styles.infoText}>Accuracy: ±{location.accuracy.toFixed(1)}m</Text>
          </>
        ) : (
          <Text style={styles.infoText}>Press the button to retrieve coordinates.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  resultBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#1c1584ff',
  },
  coordText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  }
});

export default GeolocationExample;