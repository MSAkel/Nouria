import { View, StyleSheet } from "react-native";
import { Avatar, Text, Card, Button, Icon, Chip } from "@rneui/themed";

export default function Tab() {
  return (
    <View>
      <View>
        <Avatar
          size={70}
          rounded
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />
        <Text>Welcome back, Sarah!</Text>
        <Text>Week xx of pregnancy.</Text>
      </View>

      <Text h4>Upcoming Events</Text>
      <Card>
        <Icon reverse name="calendar" type="ionicon" color="#D4E6B5" />
        <Text>Prenatal Yoga Class</Text>
        <Text>Tomorrow, 10:00 AM</Text>
        {/* <Button
          icon={
            <Icon name="code" color="#ffffff" iconStyle={{ marginRight: 10 }} />
          }
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        /> */}
      </Card>

      <Text h4>My courses</Text>
      <Card>
        <Icon reverse name="calendar" type="ionicon" color="#D4E6B5" />
        <Chip title="Post Natal" containerStyle={{ marginVertical: 15 }} />
        <Text>Fundamentals of Latching</Text>
        <Text>Rebecca Smith</Text>
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
