import { Button, Icon } from "@rneui/themed";
import { Stack, useRouter } from "expo-router";

export default function ProvidersLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Providers" }} />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Provider Profile",
          presentation: "modal",
          headerLeft: () => (
            <Icon name="arrow-back" onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
}
