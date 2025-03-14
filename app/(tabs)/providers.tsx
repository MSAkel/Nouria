import { View, Text, StyleSheet } from "react-native";

export default function ProvidersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Providers Tab!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
