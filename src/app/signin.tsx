import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';

type Props = {};

const SignInScreen = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // You can implement actual sign-in logic here (e.g., API call)
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
    } else {
      router.dismissAll();
      router.push('/(tabs)'); // Navigate to the app home screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.submitBtn} onPress={handleSignIn}>
        <Text style={styles.submitBtnText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => router.push('/signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => router.push('/(tabs)')}>
        <Text style={styles.linkText}>Go to App Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1A1A31',  // Matching background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',  // White text color to contrast with dark background
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',  // Semi-transparent input field
    color: 'white',  // Text color inside input fields
  },
  submitBtn: {
    width: '100%',
    height: 50,
    backgroundColor: '#4EDB79',  // Consistent button color from your other components
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 10,
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A31',  // Dark text to contrast with the button background
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#4EDB79',  // Link color matching other components
    fontSize: 16,
  },
});
