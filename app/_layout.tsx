import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" // This matches the (tabs) group
        options={{ headerShown: false }} // Hide the header for tabs
      />
    </Stack>
  );
}
