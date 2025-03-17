import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apollo-client";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack>
        <Stack.Screen
          name="(tabs)" // This matches the (tabs) group
          options={{ headerShown: false }} // Hide the header for tabs
        />
      </Stack>
    </ApolloProvider>
  );
}
