import { FlatList, Text, SafeAreaView, View, StyleSheet } from "react-native";
import menuItems from "./menuItems.json";
import { useState } from "react";

export default App = () => {
  const [menu, setMenu] = useState([]);
  setMenu(menuItems.menu);

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
    </SafeAreaView>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: "#F4CE14",
    fontSize: 30,
    textAlign: "center",
  },
});
