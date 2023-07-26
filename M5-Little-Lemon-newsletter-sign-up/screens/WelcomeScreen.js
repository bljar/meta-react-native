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
      <Text style={styles.image}>
        Little Lemon, your local Medirerranean Bistro
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    padding: 20,
    margin: 10,
    textAlign: "center",
  },
  image: {
    margin: 20,
    marginTop: 30,
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  button: {
    fontSize: 22,
    alignItems: "center",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#F4CE14",
  },
});

export default WelcomeScreen;
