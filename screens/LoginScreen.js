import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [biometryAvailable, setBiometryAvailable] = useState(false);

  useEffect(() => {
    checkBiometricAvailability();
  }, []);

  const checkBiometricAvailability = async () => {
    const { available } = await rnBiometrics.isSensorAvailable();
    setBiometryAvailable(available);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      navigation.replace('Home');
    } else {
      Alert.alert('Invalid credentials');
    }
  };

  const handleFaceIdLogin = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({ promptMessage: 'Authenticate with Face ID' });
      if (success) {
        navigation.replace('Home');
      } else {
        Alert.alert('Authentication failed');
      }
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      {biometryAvailable && (
        <View style={styles.faceIdButton}>
          <Button title="Login with Face ID" onPress={handleFaceIdLogin} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  faceIdButton: {
    marginTop: 20,
  },
});

