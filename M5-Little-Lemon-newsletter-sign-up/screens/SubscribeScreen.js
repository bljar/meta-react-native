import React, { useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = useState("");
  const isValidEmail = validateEmail(email);

  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/little-lemon-logo-grey.png")}
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for out latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        placeholder="Type your email"
        onChangeText={onChangeEmail}
      />
      <Pressable
        disabled={!isValidEmail}
        style={() => [
          {
            backgroundColor: isValidEmail ? "#495E57" : "grey",
          },
          styles.button,
        ]}
        onPress={() => Alert.alert("Thanks for subscribing, stay tuned!")}
      >
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    margin: 20,
    marginTop: 30,
    width: 100,
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 18,
    margin: 12,
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
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
});

export default SubscribeScreen;
