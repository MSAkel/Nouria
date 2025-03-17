import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Button, Card, Chip, Icon, SearchBar } from "@rneui/themed";
import { useState } from "react";
import styled from "styled-components/native";
import { IconSymbol } from "@components/ui/IconSymbol";
import { useRouter } from "expo-router";
import { useUsersQuery } from "@graphql/generated";

const StickySearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 1rem;
`;

const Container = styled.View`
  margin: 1rem;
  flex-direction: row;
  gap: 1rem;
`;

const Title = styled(Text)`
  margin: 0 1rem;
`;

export default function ProvidersScreen() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const { loading, error, data } = useUsersQuery();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View>
      <StickySearchBar>
        <SearchBar
          placeholder="Search..."
          onChangeText={setSearch}
          value={search}
          // lightTheme
          // containerStyle={{ backgroundColor: "transparent" }}
        />
        <IconSymbol size={32} name="filter" color="green" />
      </StickySearchBar>
      <ScrollView>
        <Title style={styles.title}>Providers List</Title>

        <FlatList
          data={data?.users}
          keyExtractor={(provider) => provider.id}
          renderItem={({ item }) => (
            <Card key={item.id}>
              <Container>
                <Icon reverse name="calendar" type="ionicon" color="#D4E6B5" />
                <View>
                  <Chip
                    title="Post Natal"
                    containerStyle={{ marginVertical: 15 }}
                  />
                  <Text>{item.name}</Text>
                  <Text>Rebecca Smith</Text>
                </View>
              </Container>

              <Button
                title="View Provider 1"
                onPress={() => router.push(`/(tabs)/providers/${item.id}`)}
              />
            </Card>
          )}
        />
      </ScrollView>
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
