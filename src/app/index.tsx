import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <Link href={"/signin"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Sign In</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Go to Sign Up</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A1A31", 
    padding: 20,
    height:'100%'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff", 
    marginBottom: 40,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#4EDB79",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff", 
    fontSize: 18,
    fontWeight: "bold",
  },
});
