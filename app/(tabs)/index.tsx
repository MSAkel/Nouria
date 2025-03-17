import { View, StyleSheet } from "react-native";
import { Avatar, Text, Card, Button, Icon, Chip } from "@rneui/themed";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 1rem;
  flex-direction: row;
  gap: 1rem;
`;

const Title = styled(Text)`
  margin: 0 1rem;
`;

export default function Tab() {
  return (
    <View>
      <Container>
        <Avatar
          size={70}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <View>
          <Text>Welcome back, Sarah!</Text>
          <Text>Week xx of pregnancy.</Text>
        </View>
      </Container>

      <Title h4>Upcoming Events</Title>
      <Card>
        <Container>
          <Icon reverse name="calendar" type="ionicon" color="#D4E6B5" />
          <View>
            <Text>Prenatal Yoga Class</Text>
            <Text>Tomorrow, 10:00 AM</Text>
          </View>
        </Container>
      </Card>

      <Title h4>My courses</Title>

      <Card>
        <Container>
          <Icon reverse name="calendar" type="ionicon" color="#D4E6B5" />
          <View>
            <Chip title="Post Natal" containerStyle={{ marginVertical: 15 }} />
            <Text>Fundamentals of Latching</Text>
            <Text>Rebecca Smith</Text>
          </View>
        </Container>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
