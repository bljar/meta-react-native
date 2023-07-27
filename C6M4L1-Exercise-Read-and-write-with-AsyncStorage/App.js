import * as React from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Constants from "expo-constants";
import { Switch } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import useUpdate from "./useUpdate";

export default function App() {
  const [preferences, setPreferences] = React.useState({
    pushNotifications: false,
    emailMarketing: false,
    latestNews: false,
  });

  useUpdate(() => {
    const value = Object.entries(preferences).map((entry) => {
      return [entry[0], String(entry[1])];
    })(async () => {
      try {
        await AsyncStorage.multiSet(value);
      } catch (e) {
        Alert.alert("An error occurred: ${e.message}");
      }
    });
  });

  const updateState = (key) => () =>
    setPreferences((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account Preferences</Text>
      <View style={styles.row}>
        <Text>Push notifications</Text>
        <Switch
          value={preferences.pushNotifications}
          onValueChange={updateState("pushNotifications")}
        />
      </View>
      <View style={styles.row}>
        <Text>Marketing emails</Text>
        <Switch
          value={preferences.emailMarketing}
          onValueChange={updateState("emailMarketing")}
        />
      </View>
      <View style={styles.row}>
        <Text>Latest news</Text>
        <Switch
          value={preferences.latestNews}
          onValueChange={updateState("latestNews")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
