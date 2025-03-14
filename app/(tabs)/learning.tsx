import { View, Text, StyleSheet } from "react-native";

export default function LearningScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Learning Tab!</Text>
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
