import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProviderProfile() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Provider Profile</Text>
      <Text>Provider ID: {id}</Text>
    </View>
  );
}
