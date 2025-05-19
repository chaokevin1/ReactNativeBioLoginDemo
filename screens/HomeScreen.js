import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

const navigation = useNavigation();

const handleSignOut = () =>{
    navigation.navigate("Login")

}


  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>🎉 Welcome! You're logged in.</Text>
    <Button title = "Sign out" onPress={() => handleSignOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: '600',
  },
});
