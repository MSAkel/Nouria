import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@components/HapticTab";
import { IconSymbol } from "@components/ui/IconSymbol";
import TabBarBackground from "@components/ui/TabBarBackground";
import { Colors } from "@constants/Colors";
import { useColorScheme } from "@hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // headerShown: false,
        headerTitle: "Nouria",
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={20} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="providers"
        options={{
          title: "Providers",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={20} name="search.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={20} name="event.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="learning"
        options={{
          title: "Learning",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={20} name="event.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={20} name="groups.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
