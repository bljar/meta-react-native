import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo.png")}
      />
      <Text style={styles.text}>
        Little Lemon, your local Medirerranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    margin: 20,
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    margin: 20,
    marginBottom: 100,
    padding: 10,
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#495E57",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});

export default WelcomeScreen;
